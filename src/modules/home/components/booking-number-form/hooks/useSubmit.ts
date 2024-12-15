import type { FormikHelpers } from 'formik'
import type { IBookingNumberForm } from '../types'
import { server_handleLogin } from '@/api/server/server_handleLogin'
import { useRoot$ } from '@/modules/app/mst/StoreProvider'

export const useSubmit = () => {
    const { handleLogin } = useRoot$()
    const submit = async (values: IBookingNumberForm, formikHelpers: FormikHelpers<IBookingNumberForm>) => {
        const res = await server_handleLogin({
            bookingId: values.bookingNumber,
            registrationId: '',
            signal: new AbortController().signal,
        })

        if (!res || res.message === 'unauthorized') {
            formikHelpers.setErrors({ bookingNumber: 'Invalid booking number' })
            return
        } else if (res.message === 'success') {
            formikHelpers.resetForm()
            await handleLogin({ bookingId: values.bookingNumber })
        }

        formikHelpers.setSubmitting(false)
    }
    return { submit }
}
