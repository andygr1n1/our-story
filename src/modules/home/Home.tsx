import { useRoot$ } from '../app/mst/StoreProvider'
import RegistrationFormIndex from './components/registration-form/RegistrationFormIndex'
import { Title } from './components/Title'
import { useEffect, type LegacyRef } from 'react'
import { useParallax } from 'react-scroll-parallax'

export const Home = () => {
    const { ref } = useParallax({ speed: 25 })

    const { handleLogin } = useRoot$()
    useEffect(() => {
        console.log('rendering')
        handleLogin()
    }, [])

    return (
        <div className='animate-opacity-5' ref={ref as LegacyRef<HTMLDivElement>}>
            <Title />
            <RegistrationFormIndex />
        </div>
    )
}
