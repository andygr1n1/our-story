import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
export const App = () => {
    return (
        <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
            <AppRoutes />
        </BrowserRouter>
    )
}
