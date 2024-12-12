// import { useRoot$ } from '../app/mst/StoreProvider'
// import { useEffect } from 'react'

import { observer } from 'mobx-react-lite'
import { useRoot$ } from '../app/mst/StoreProvider'
import { useEffect, type LegacyRef } from 'react'
import { Title } from './components/Title'
import { useParallax } from 'react-scroll-parallax'
import { Timer } from '@/components/Timer'
import BookingNumberFormIndex from './components/booking-number-form/BookingNumberFormIndex'

export const Home = observer(() => {
    const { ref } = useParallax({ speed: 25 })
    const { redirectToBookingIfAuthorized } = useRoot$()
    useEffect(() => {
        redirectToBookingIfAuthorized()
    }, [])

    return (
        <div className='animate-opacity-5' ref={ref as LegacyRef<HTMLDivElement>}>
            <Title />
            <Timer />
            <BookingNumberFormIndex />
        </div>
    )
})
