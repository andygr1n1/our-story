import { useTranslation } from 'react-i18next'
import type { IRegistrationForm } from '../types'

export const useValidate = () => {
    const { t } = useTranslation()
    const validate = (values: IRegistrationForm) => {
        const errors: Partial<Record<keyof IRegistrationForm, string>> = {}

        const phonePatternPattern = /^(?:\+?\d*)$/
        const emailPattern = /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?$/

        if (!values.name1.trim().length) {
            errors.name1 = t('* Required field')
        }

        if (!values.secondName1.trim().length) {
            errors.secondName1 = t('* Required field')
        }

        if (!values.phone1.length) {
            errors.phone1 = t('* Required field')
        }

        if (!values.email1.length) {
            errors.email1 = t('* Required field')
        }

        if (!emailPattern.test(values.email1)) {
            errors.email1 = t('* Invalid email')
        }

        if (!phonePatternPattern.test(values.phone1)) {
            errors.phone1 = t('* Invalid phone number')
        }

        if (!values.solo) {
            if (values.phone1 === values.phone2) {
                errors.phone2 = t('Phone numbers must be different')
                !errors.phone1 && (errors.phone1 = t('Phone numbers must be different'))
            }

            if (values.email1 === values.email2) {
                errors.email2 = t('Emails must be different')
                !errors.email1 && (errors.email1 = t('Emails must be different'))
            }

            if (!values.name2.trim().length) {
                errors.name2 = t('* Required field')
            }

            if (!values.secondName2.trim().length) {
                errors.secondName2 = t('* Required field')
            }

            if (!values.phone2.length) {
                errors.phone2 = t('* Required field')
            }

            if (!values.email2.length) {
                errors.email2 = t('* Required field')
            }

            if (!emailPattern.test(values.email2)) {
                errors.email2 = t('* Invalid email')
            }

            if (!phonePatternPattern.test(values.phone2)) {
                errors.phone2 = t('* Invalid phone number')
            }
        }

        return errors
    }

    return { validate }
}
