import { observer } from 'mobx-react-lite'
import { useEffect, type LegacyRef } from 'react'
import { useRoot$ } from '../app/mst/StoreProvider'
import { Title } from './components/Title'
import RegistrationFormIndex from './components/registration-form/RegistrationFormIndex'
import { useParallax } from 'react-scroll-parallax'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export const Registration = observer(() => {
    const { ref } = useParallax({ speed: 25 })
    const { registrationId, handleLogin } = useRoot$()
    const { t } = useTranslation()

    useEffect(() => {
        handleLogin()
    }, [registrationId])

    return (
        <div className='animate-opacity-5' ref={ref as LegacyRef<HTMLDivElement>}>
            <Title />
            <Container className='relative z-[20] flex justify-center items-center w-full'>
                <Row className='shadow-lg py-4 md:p-5 bg-white rounded-lg w-full max-w-xl'>
                    <Col md={12}>
                        <h2 className='text-center mb-4 caveat-500 text-3xl'>{t('Wedding ceremony registration')}</h2>
                        <RegistrationFormIndex />
                    </Col>
                </Row>
            </Container>
        </div>
    )
})
