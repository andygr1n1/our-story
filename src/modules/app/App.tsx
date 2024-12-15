import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { ParallaxProvider } from 'react-scroll-parallax'
import { createRoot$, Root$Provider } from './mst/StoreProvider'
import { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const App = () => {
    const queryClient = useMemo(() => new QueryClient(), [])
    const root$ = useMemo(() => createRoot$(), [])

    return (
        <ParallaxProvider>
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                <QueryClientProvider client={queryClient}>
                    <Root$Provider store={root$}>
                        <AppRoutes />
                    </Root$Provider>
                </QueryClientProvider>
            </BrowserRouter>
        </ParallaxProvider>
    )
}
