import { observer } from 'mobx-react-lite'
import { useRoot$ } from '../app/mst/StoreProvider'
import { useEffect } from 'react'
import { Logout } from './components/Logout'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BookingFooter } from './components/BookingFooter'
import BookingFormIndex from './components/registration-form/BookingFormIndex'

export const Booking = observer(() => {
    const { bookingId, handleLogin } = useRoot$()
    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0)
        handleLogin()
    }, [bookingId])

    return (
        <Container className='flex flex-col gap-4 mx-auto my-20 w-full max-w-xl'>
            <Row className='shadow-lg mx-auto py-4 md:p-5 bg-white rounded-lg w-full max-w-xl relative'>
                <Col md={12}>
                    <Card bg='success' text='white' className=''>
                        <Card.Body>
                            <Card.Title>{t('Registration Information')}</Card.Title>
                            <Card.Text>
                                {t('Your Registration number is')}: <b>{bookingId}</b>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <Row>
                <Col md={12}>
                    <Card bg='light' text='' className='mb-4'>
                        <Card.Body>
                            <Card.Title>Time until activation</Card.Title>
                            <Card.Text>Information dashboard: activation data</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
            <Row className='shadow-lg mx-auto py-4 md:p-5 bg-white rounded-lg w-full max-w-xl relative'>
                <Col md={12}>
                    <BookingFooter />
                </Col>
            </Row>
            <Row className='shadow-lg mx-auto py-4 md:p-5 bg-white rounded-lg w-full max-w-xl relative'>
                <Col md={12}>
                    <BookingFormIndex />
                </Col>
            </Row>

            <Row className='shadow-lg mx-auto py-4 md:p-5 bg-white rounded-lg w-full max-w-xl relative'>
                <Col md={12}>
                    <Logout />
                </Col>
            </Row>
        </Container>
    )
})
