import { Formik } from 'formik'
import RegistrationForm from './RegistrationForm'
import { useValidate } from './hooks/useValidate'
import { useSubmit } from './hooks/useSubmit'
import { observer } from 'mobx-react-lite'
import { useBookingFormInitialValues } from './hooks/useBookingFormInitialValues'
import { ButtonToggleEditBooking } from './components/ButtonToggleEditBooking'

const BookingFormIndex = observer(() => {
    const { initialValues } = useBookingFormInitialValues()
    const { validate } = useValidate()
    const { submit } = useSubmit()

    return (
        <Formik initialValues={initialValues} enableReinitialize validate={validate} onSubmit={submit}>
            <>
                <ButtonToggleEditBooking />
                <RegistrationForm />
            </>
        </Formik>
    )
})

export default BookingFormIndex
