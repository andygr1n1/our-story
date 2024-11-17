import type { ReactNode } from 'react'
import toast from 'react-hot-toast'

// export const notify = (message?: ReactNode, props?: { message: ReactNode }) =>
//     toast(<div className='whitespace-normal flex w-full h-full items-center'>{props?.message || message}</div>, {
//         id: !!message ? String(message) : String(props?.message),
//         icon: <IconExpired className='text-amber-500 w-6 h-6' />,
//     })

export const toastSuccess = (message?: ReactNode, props?: { message: ReactNode }) =>
    toast.success(
        <div className='whitespace-normal flex w-full h-full items-center'>{props?.message || message}</div>,
        {
            id: !!message ? String(message) : String(props?.message),
        },
    )

export const toastError = (message?: ReactNode, props?: { message: ReactNode }) =>
    toast.error(<div className='whitespace-normal flex w-full h-full items-center'>{props?.message || message}</div>)
