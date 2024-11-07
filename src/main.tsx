import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './modules/app/App'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { root$, Root$Provider } from './modules/app/mst/StoreProvider'
import './styles/index.css'

const queryClient = new QueryClient()

const Main = () => {
    return (
        <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            <Root$Provider store={root$}>
                <App />
            </Root$Provider>
        </QueryClientProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
