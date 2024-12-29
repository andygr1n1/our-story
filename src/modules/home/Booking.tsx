import { observer } from 'mobx-react-lite'
import { useRoot$ } from '../app/mst/StoreProvider'
import { useEffect } from 'react'
import { Logout } from './components/Logout'
import { Col, Row } from 'react-bootstrap'
import BookingFormIndex from './components/registration-form/BookingFormIndex'
import { Title } from './components/Title'
import { DearGuests } from '@/components/DearGuests'
import { WeddingDateCalendar } from './components/WeddingDateCalendar'
import { PlanOfTheDay } from '@/components/PlanOfTheDay'
import { DressCode } from '@/components/DressCode'
import { GiftsAndFlowers } from '@/components/GiftsAndFlowers'
import { BookingInfo } from '@/components/BookingInfo'
import { TelegramGroup } from '@/components/TelegramGroup'

export const Booking = observer(() => {
    const { bookingId, handleLogin } = useRoot$()

    useEffect(() => {
        window.scrollTo(0, 0)
        handleLogin()
    }, [bookingId])

    return (
        <div className='animate-opacity-5 overflow-x-hidden'>
            <Title />
            <BookingInfo />
            <TelegramGroup />

            <DearGuests />
            <WeddingDateCalendar />
            <PlanOfTheDay />
            <DressCode />
            <GiftsAndFlowers />

            <Row className='shadow-lg mx-auto py-4 md:p-5 bg-white rounded-lg w-full max-w-xl relative'>
                <Col md={12}>
                    <BookingFormIndex />
                </Col>
            </Row>

            <Row className='shadow-lg mx-auto py-4 my-4 md:p-5 bg-white rounded-lg w-full max-w-xl relative'>
                <Col md={12}>
                    <Logout />
                </Col>
            </Row>
        </div>
    )
})
