import type { FormikHelpers } from 'formik'
import type { IBookingNumberForm } from '../types'

export const useSubmit = () => {
    const submit = (values: IBookingNumberForm, formikHelpers: FormikHelpers<IBookingNumberForm>) => {
        // validate booking number and redirect to booking page

        console.log('validate values', values)
        formikHelpers.setSubmitting(false)
    }
    return { submit }
}
