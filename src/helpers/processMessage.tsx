import { HTTPError } from 'ky'
import type { ReactNode } from 'react'
import toast from 'react-hot-toast'

// export const notify = (message?: ReactNode, props?: { message: ReactNode }) =>
//     toast(<div className='whitespace-normal flex w-full h-full items-center'>{props?.message || message}</div>, {
//         id: !!message ? String(message) : String(props?.message),
//         icon: <IconExpired className='text-amber-500 w-6 h-6' />,
//     })

export const toastSuccess = (message?: ReactNode, props?: { message: ReactNode }) =>
    toast.success(
        <div className='whitespace-normal flex w-full h-full items-center text-center'>
            {props?.message || message}
        </div>,
        {
            id: !!message ? String(message) : String(props?.message),
        },
    )

export const toastError = (message?: ReactNode, props?: { message: ReactNode }) =>
    toast.error(
        <div className='whitespace-normal flex w-full h-full text-center items-center'>
            {props?.message || message}
        </div>,
    )

export const resolveError = async (error?: unknown, process = true) => {
    let errorMessage = `Unknown error ${error}`
    if (error instanceof HTTPError && error.response) {
        const errorJson = await error.response.json()
        errorMessage = errorJson.message
    } else if (error instanceof Error) {
        errorMessage = error.message
    }

    if (errorMessage.includes('abort')) {
        return undefined
    }

    process && toastError(errorMessage)
    throw new Error(errorMessage)
}
