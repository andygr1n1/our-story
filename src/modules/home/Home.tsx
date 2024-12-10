// import { useRoot$ } from '../app/mst/StoreProvider'
// import { useEffect } from 'react'

import { observer } from 'mobx-react-lite'
import { useRoot$ } from '../app/mst/StoreProvider'
import { useEffect } from 'react'

export const Home = observer(() => {
    const { redirectToBookingIfAuthorized } = useRoot$()
    useEffect(() => {
        redirectToBookingIfAuthorized()
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
})
