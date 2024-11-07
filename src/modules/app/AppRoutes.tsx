import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeIndex } from '../home/HomeIndex'

export const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path={`/${APP_ROUTES_ENUM.HOME}`} element={<HomeIndex />} />
                <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.HOME}`} />} />
            </Routes>
        </Suspense>
    )
}
