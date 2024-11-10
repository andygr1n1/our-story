import { Container, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import RegistrationForm from './RegistrationForm'
import { useInitialValues } from './hooks/useInitialValues'
import { useValidate } from './hooks/useValidate'
import { useSubmit } from './hooks/useSubmit'

const RegistrationFormIndex = () => {
    const { initialValues } = useInitialValues()
    const { validate } = useValidate()
    const { submit } = useSubmit()

    return (
        <Container className='flex justify-center items-center w-full'>
            <Row className='shadow-lg p-5 bg-transparent rounded-lg w-full max-w-xl'>
                <Col md={12}>
                    <h2 className='text-center mb-4 montaga-regular text-2xl'>Wedding Ceremony Registration</h2>
                    <Formik initialValues={initialValues} validate={validate} onSubmit={submit}>
                        <RegistrationForm />
                    </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default RegistrationFormIndex
