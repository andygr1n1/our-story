import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { Provider } from '@/components/ui/provider'
export const App = () => {
    return (
        <Provider>
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                <AppRoutes />
            </BrowserRouter>
        </Provider>
    )
}
