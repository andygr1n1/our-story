import { Button, Form } from 'react-bootstrap'
import { Form as FormikForm, useFormikContext } from 'formik'
import type { IBookingNumberForm } from './types'
import { useTranslation } from 'react-i18next'

const BookingNumberForm = () => {
    const formikContext = useFormikContext<IBookingNumberForm>()
    const { t } = useTranslation()

    const bookingNumberError = formikContext.touched.bookingNumber && (formikContext.errors.bookingNumber as string)

    return (
        <FormikForm className='z-[20] relative'>
            <Form.Group controlId={`bookingNumber`}>
                <Form.Label className='text-sm'>{t('Booking Number')}</Form.Label>
                <Form.Control
                    name={`bookingNumber`}
                    size='lg'
                    type='text'
                    value={formikContext.values.bookingNumber}
                    onChange={formikContext.handleChange}
                    isInvalid={!!bookingNumberError}
                />
                {bookingNumberError && (
                    <Form.Control.Feedback type='invalid'>{bookingNumberError}</Form.Control.Feedback>
                )}
            </Form.Group>
            <Button size='lg' type='submit' className='mt-4 w-full custom-button-bg btn-primary'>
                <span className='caveat-500 text-2xl'>{t('Login')}</span>
            </Button>
        </FormikForm>
    )
}

export default BookingNumberForm
