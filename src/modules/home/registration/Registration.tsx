import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useRoot$ } from '../../app/mst/StoreProvider'
import { Title } from '../components/Title'
import RegistrationFormIndex from '../components/registration-form/RegistrationFormIndex'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { WeddingDateCalendar } from '../components/WeddingDateCalendar'
// import { Example } from './components/Example'
import { DearGuests } from './components/DearGuests'
import { PlanOfTheDay } from './components/PlanOfTheDay'
// import { DressCode } from './components/DressCode'
// import { GiftsAndFlowers } from './components/GiftsAndFlowers'

export const Registration = observer(() => {
    const { registrationId, handleLogin } = useRoot$()
    const { t } = useTranslation()

    useEffect(() => {
        handleLogin()
    }, [registrationId])

    return (
        <div className='animate-opacity-5 overflow-x-hidden'>
            <Title />
            <DearGuests />
            <WeddingDateCalendar />
            <PlanOfTheDay />
            {/* <DressCode /> */}
            {/* <GiftsAndFlowers /> */}
            {/* <Example axisX={-100} />
                <Example axisX={100} />
                <Example axisX={-200} />
                <Example axisX={200} />
                <Example axisX={200} /> */}
            {/* Дресс код */}
            {/* Подарки и цветы */}
            <Container className='relative z-[20] flex justify-center items-center w-full my-10'>
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
