import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { ParallaxProvider } from 'react-scroll-parallax'

export const App = () => {
    return (
        <ParallaxProvider>
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                <AppRoutes />
            </BrowserRouter>
        </ParallaxProvider>
    )
}
