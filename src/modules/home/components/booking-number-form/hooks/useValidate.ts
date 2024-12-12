import { useTranslation } from 'react-i18next'
import type { IBookingNumberForm } from '../types'
export const useValidate = () => {
    const { t } = useTranslation()
    const validate = (values: IBookingNumberForm) => {
        const errors: Partial<Record<keyof IBookingNumberForm, string>> = {}

        if (!values.bookingNumber.trim().length) {
            errors.bookingNumber = t('* Required field')
        }

        return errors
    }

    return { validate }
}
