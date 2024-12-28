import { observer } from 'mobx-react-lite'
import { useRoot$ } from '../app/mst/StoreProvider'
import { Home } from './Home'
import { Registration } from './registration/Registration'
import { Booking } from './Booking'

export const HomeIndex = observer(() => {
    const { isHome, isRegistration, isBooking } = useRoot$()

    return (
        <>
            {isHome && <Home />}
            {isRegistration && <Registration />}
            {isBooking && <Booking />}
        </>
    )
})
