import { Footer } from './components/Footer'
import RegistrationFormIndex from './components/registration-form/RegistrationFormIndex'
import { Title } from './components/Title'
import { InvitationImage } from './components/InvitationImage'
import type { LegacyRef } from 'react'
import { useParallax } from 'react-scroll-parallax'
export const HomeIndex = () => {
    const { ref } = useParallax({ speed: 25 })

    return (
        <div>
            <InvitationImage />
            <div ref={ref as LegacyRef<HTMLDivElement>}>
                <Title />
                <RegistrationFormIndex />
            </div>
            <Footer />
        </div>
    )
}
