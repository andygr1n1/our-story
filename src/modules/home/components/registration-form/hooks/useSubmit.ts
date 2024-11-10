import type { FormikHelpers } from 'formik'
import type { IRegistrationForm } from '../types'

export const useSubmit = () => {
    const submit = (values: IRegistrationForm, formikHelpers: FormikHelpers<IRegistrationForm>) => {
        console.log('values', values)

        formikHelpers.setSubmitting(false)
    }
    return { submit }
}
