import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './modules/app/App'
import { Toaster } from 'react-hot-toast'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { root$, Root$Provider } from './modules/app/mst/StoreProvider'
import './styles/index.scss'
import { SnowfallAnimation } from './components/SnowfallAnimation'
const queryClient = new QueryClient()

const Main = () => {
    return (
        <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            <Root$Provider store={root$}>
                <App />
                <Toaster
                    toastOptions={{
                        duration: 4000,
                        style: { boxShadow: '0 2px 9px 3px rgba(0, 0, 0, 0.25) !important' },
                        // className: '!bg-global-bg-plasma !text-cText !backdrop-blur-sm',
                        error: {
                            duration: 4000,
                        },
                    }}
                />
                <SnowfallAnimation />
            </Root$Provider>
        </QueryClientProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
