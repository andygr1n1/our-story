import { observer } from 'mobx-react-lite'
import { useRoot$ } from '../app/mst/StoreProvider'
import { useEffect } from 'react'

export const Booking = observer(() => {
    const { bookingId, handleLogin } = useRoot$()
    useEffect(() => {
        console.log('rendering', bookingId)
        handleLogin()
    }, [bookingId])
    return <div>Booking</div>
})
