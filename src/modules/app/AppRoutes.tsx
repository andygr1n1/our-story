import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeIndex } from '../home/HomeIndex'
import { RootLayout } from '@/layouts/RootLayout'

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={`/${APP_ROUTES_ENUM.HOME}`} element={<RootLayout><HomeIndex /></RootLayout>} />
            <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.HOME}`} />} />
        </Routes>
    )
}
