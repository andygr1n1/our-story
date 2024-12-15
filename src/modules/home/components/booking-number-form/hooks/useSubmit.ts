import type { FormikHelpers } from 'formik'
import type { IBookingNumberForm } from '../types'
import { server_handleLogin } from '@/api/server/server_handleLogin'
import { useRoot$ } from '@/modules/app/mst/StoreProvider'
import { removeSessionJWTFromCookie } from '@/helpers/universalCookie'
import { useTranslation } from 'react-i18next'

export const useSubmit = () => {
    const { t } = useTranslation()
    const { handleLogin } = useRoot$()
    const submit = async (values: IBookingNumberForm, formikHelpers: FormikHelpers<IBookingNumberForm>) => {
        const res = await server_handleLogin({
            bookingId: values.bookingNumber,
            registrationId: '',
            signal: new AbortController().signal,
        })
        if (!res || res.message === 'unauthorized') {
            formikHelpers.setErrors({ bookingNumber: t('invalid booking number') })
            return
        } else if (!res.registration) {
            formikHelpers.setErrors({ bookingNumber: t('user must pass registration') })
            return
        } else if (res.message === 'success') {
            formikHelpers.resetForm()
            removeSessionJWTFromCookie()
            await handleLogin({ bookingId: values.bookingNumber })
        }

        formikHelpers.setSubmitting(false)
    }
    return { submit }
}
