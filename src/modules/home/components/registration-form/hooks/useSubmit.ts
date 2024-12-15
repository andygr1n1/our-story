import type { FormikHelpers } from 'formik'
import type { IRegistrationForm } from '../types'
import { useAddGuests } from './useAddGuests'
import { toastSuccess } from '@/helpers/processMessage'
import { useTranslation } from 'react-i18next'
import { useRoot$ } from '@/modules/app/mst/StoreProvider'

export const useSubmit = () => {
    const { onChangeField } = useRoot$()
    const { t } = useTranslation()
    const { addGuests } = useAddGuests()

    const submit = (values: IRegistrationForm, formikHelpers: FormikHelpers<IRegistrationForm>) => {
        formikHelpers.setSubmitting(true)
        addGuests({
            values,
            onSuccess: (bookingNumber) => {
                if (bookingNumber && !values.bookingEditor) {
                    formikHelpers.resetForm()
                    toastSuccess(t('Thank you for your registration!'))
                    const url = new URL(window.location.href)
                    url.searchParams.delete('registration')
                    url.searchParams.set('booking', bookingNumber)
                    window.history.replaceState({}, '', url.toString())
                    onChangeField('registrationId', '')
                    onChangeField('bookingId', bookingNumber)
                } else if (bookingNumber && values.bookingEditor) {
                    formikHelpers.setFieldValue('disabled', true)
                    toastSuccess(t('Updated successfully!'))
                }
            },
            onSettled: () => {
                formikHelpers.setSubmitting(false)
            },
        })
    }
    return { submit }
}
