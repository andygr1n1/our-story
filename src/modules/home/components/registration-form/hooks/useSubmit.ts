import type { FormikHelpers } from 'formik'
import type { IRegistrationForm } from '../types'
import { useAddGuests } from './useAddGuests'
import { toastSuccess } from '@/helpers/processMessage'

export const useSubmit = () => {
    const { addGuests } = useAddGuests()

    const submit = (values: IRegistrationForm, formikHelpers: FormikHelpers<IRegistrationForm>) => {
        console.log('values', values)

        addGuests({
            values,
            onSuccess: () => {
                formikHelpers.resetForm()
                toastSuccess('Thank you for your registration!')
            },
            onSettled: () => {
                formikHelpers.setSubmitting(false)
            },
        })
    }
    return { submit }
}
