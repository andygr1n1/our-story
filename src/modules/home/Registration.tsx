import { observer } from 'mobx-react-lite'
import { useEffect, type LegacyRef } from 'react'
import { useRoot$ } from '../app/mst/StoreProvider'
import { Title } from './components/Title'
import RegistrationFormIndex from './components/registration-form/RegistrationFormIndex'
import { useParallax } from 'react-scroll-parallax'

export const Registration = observer(() => {
    const { ref } = useParallax({ speed: 25 })
    const { registrationId, handleLogin } = useRoot$()

    useEffect(() => {
        handleLogin()
    }, [registrationId])

    return (
        <div className='animate-opacity-5' ref={ref as LegacyRef<HTMLDivElement>}>
            <Title />
            <RegistrationFormIndex />
        </div>
    )
})
