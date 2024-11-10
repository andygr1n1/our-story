import type { IRegistrationForm } from '../types'

export const useValidate = () => {
    const validate = (values: IRegistrationForm) => {
        const errors: Partial<Record<keyof IRegistrationForm, string>> = {}

        const phonePatternPattern = /^(?:\+?\d*)$/
        const emailPattern = /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?$/

        if (!values.name1.trim().length) {
            errors.name1 = '* Required field'
        }

        if (!values.phone1.length) {
            errors.phone1 = 'Required field'
        }

        if (!values.email1.length) {
            errors.email1 = '* Required field'
        }

        if (!emailPattern.test(values.email1)) {
            errors.email1 = '* Invalid email'
        }

        if (!phonePatternPattern.test(values.phone1)) {
            errors.phone1 = '* Invalid phone number'
        }

        if (!values.solo) {
            if (!values.name2.trim().length) {
                errors.name2 = '* Required field'
            }

            if (!values.phone2.length) {
                errors.phone2 = '* Required field'
            }

            if (!values.email2.length) {
                errors.email2 = '* Required field'
            }

            if (!emailPattern.test(values.email2)) {
                errors.email2 = '* Invalid email'
            }

            if (!phonePatternPattern.test(values.phone2)) {
                errors.phone2 = '* Invalid phone number'
            }
        }

        return errors
    }

    return { validate }
}
