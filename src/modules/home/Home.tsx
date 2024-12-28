import { observer } from 'mobx-react-lite'
import { useRoot$ } from '../app/mst/StoreProvider'
import { useEffect, type LegacyRef } from 'react'
import { Title } from './components/Title'
import { useParallax } from 'react-scroll-parallax'
import BookingNumberFormIndex from './components/booking-number-form/BookingNumberFormIndex'
import { WeddingDateCalendar } from './components/WeddingDateCalendar'

export const Home = observer(() => {
    const { ref } = useParallax({ speed: 25 })
    const { redirectToBookingIfAuthorized } = useRoot$()
    useEffect(() => {
        window.scrollTo(0, 0)
        redirectToBookingIfAuthorized()
    }, [])

    return (
        <div className='animate-opacity-5 mb-10' ref={ref as LegacyRef<HTMLDivElement>}>
            <Title />
            <WeddingDateCalendar />
            <BookingNumberFormIndex />
        </div>
    )
})
