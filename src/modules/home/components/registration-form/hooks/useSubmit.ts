import type { FormikHelpers } from 'formik'
import type { IRegistrationForm } from '../types'
import { useAddGuests } from './useAddGuests'
import { toastSuccess } from '@/helpers/processMessage'
import { useTranslation } from 'react-i18next'
import { useRoot$ } from '@/modules/app/mst/StoreProvider'

export const useSubmit = () => {
    const { bookingIdFromJwt, onChangeField } = useRoot$()
    const { t } = useTranslation()
    const { addGuests } = useAddGuests()

    const submit = (values: IRegistrationForm, formikHelpers: FormikHelpers<IRegistrationForm>) => {
        addGuests({
            values,
            onSuccess: () => {
                formikHelpers.resetForm()
                toastSuccess(t('Thank you for your registration!'))
                if (bookingIdFromJwt) {
                    const url = new URL(window.location.href)
                    url.searchParams.delete('registration')
                    url.searchParams.set('booking', bookingIdFromJwt)
                    window.history.replaceState({}, '', url.toString())
                    onChangeField('registrationId', '')
                    onChangeField('bookingId', bookingIdFromJwt)
                }
            },
            onSettled: () => {
                formikHelpers.setSubmitting(false)
            },
        })
    }
    return { submit }
}
