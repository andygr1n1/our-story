import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useRoot$ } from '../app/mst/StoreProvider'

export const Registration = observer(() => {
    const { registrationId, handleLogin } = useRoot$()
    useEffect(() => {
        console.log('rendering', registrationId)
        handleLogin()
    }, [registrationId])

    return (
        <div>
            Registration
            <div>Loading and verification of id</div>
            <div>if Id is ok, it will return the Bearer Token and put it in cookies</div>
            <div>the interface will appear with form and initial data about user (names)</div>
            <div>user wil have possibility to register</div>
            <div>
                when user will submit with success, the param will be replaced with a booking number, a new page will be
                shown with new bearer token
            </div>
            <div>user will always be redirected to his booking number, after registration</div>
            <div>home page will have a menu My Booking - моё приглашение (номер приглашения)</div>
        </div>
    )
})

// 'booking-validation-required'
