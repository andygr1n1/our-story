import ReactDOM from 'react-dom/client'
import { App } from './modules/app/App'
import { Toaster } from 'react-hot-toast'
import { SnowfallAnimation } from './components/SnowfallAnimation'
import './helpers/i18n'
import './styles/index.scss'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const Main = () => {
    return (
        <>
            <App />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            <SnowfallAnimation />
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
        </>
    )
}

let root: ReactDOM.Root | null = null
const renderApp = () => {
    const container = document.getElementById('root') as HTMLElement
    if (!root) {
        root = ReactDOM.createRoot(container)
    }
    root.render(<Main />)
}

renderApp()
