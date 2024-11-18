import { Container, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import RegistrationForm from './RegistrationForm'
import { useInitialValues } from './hooks/useInitialValues'
import { useValidate } from './hooks/useValidate'
import { useSubmit } from './hooks/useSubmit'
import { useTranslation } from 'react-i18next'

const RegistrationFormIndex = () => {
    const { initialValues } = useInitialValues()
    const { validate } = useValidate()
    const { submit } = useSubmit()
    const { t } = useTranslation()

    return (
        <Container className='relative z-[20] flex justify-center items-center w-full'>
            <Row className='shadow-lg py-4 md:p-5 bg-white rounded-lg w-full max-w-xl'>
                <Col md={12}>
                    <h2 className='text-center mb-4 caveat-500 text-3xl'>{t('Wedding ceremony registration')}</h2>
                    <Formik initialValues={initialValues} validate={validate} onSubmit={submit}>
                        <RegistrationForm />
                    </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default RegistrationFormIndex
