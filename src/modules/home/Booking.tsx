import { observer } from 'mobx-react-lite'
import { useRoot$ } from '../app/mst/StoreProvider'
import { useEffect } from 'react'
import { Logout } from './components/Logout'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BookingFooter } from './components/BookingFooter'

export const Booking = observer(() => {
    const { bookingId, handleLogin } = useRoot$()
    const { t } = useTranslation()
    useEffect(() => {
        console.log('rendering', bookingId)
        handleLogin()
    }, [bookingId])
    return (
        <Container className='flex flex-col gap-4 mx-auto my-20 w-full max-w-xl'>
            <Row>
                <Col md={12}>
                    <Card bg='success' text='white' className='mb-4'>
                        <Card.Body>
                            <Card.Title>{t('Registration Information')}</Card.Title>
                            <Card.Text>
                                {t('Your Registration number is')}: <b>{bookingId}</b>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div>
                <div>Information dashboard: activation data etc...</div>
                <div>User info with possibility to add, remove, edit</div>
                <Row>
                    <Col md={12}>
                        <BookingFooter />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Logout />
                    </Col>
                </Row>
            </div>
        </Container>
    )
})
