import type { FormikHelpers } from 'formik'
import type { IRegistrationForm } from '../types'
import { useAddGuests } from './useAddGuests'
import { toastSuccess } from '@/helpers/processMessage'
import { useTranslation } from 'react-i18next'

export const useSubmit = () => {
    const { t } = useTranslation()
    const { addGuests } = useAddGuests()

    const submit = (values: IRegistrationForm, formikHelpers: FormikHelpers<IRegistrationForm>) => {
        console.log('values', values)

        addGuests({
            values,
            onSuccess: () => {
                formikHelpers.resetForm()
                toastSuccess(t('Thank you for your registration!'))
            },
            onSettled: () => {
                formikHelpers.setSubmitting(false)
            },
        })
    }
    return { submit }
}
