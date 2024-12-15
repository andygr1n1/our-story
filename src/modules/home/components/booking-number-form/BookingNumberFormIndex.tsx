import { Container, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import BookingNumberForm from './BookingNumberForm'
import { useInitialValues } from './hooks/useInitialValues'
import { useValidate } from './hooks/useValidate'
import { useSubmit } from './hooks/useSubmit'
// import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'

const BookingNumberFormIndex = observer(() => {
    const { initialValues } = useInitialValues()
    const { validate } = useValidate()
    const { submit } = useSubmit()

    return (
        <Container className='relative z-[20] flex justify-center items-center w-full my-20'>
            <Row className='py-4 md:p-5 rounded-lg w-full max-w-sm'>
                <Col md={12}>
                    <Formik initialValues={initialValues} enableReinitialize validate={validate} onSubmit={submit}>
                        <BookingNumberForm />
                    </Formik>
                </Col>
            </Row>
        </Container>
    )
})

export default BookingNumberFormIndex
