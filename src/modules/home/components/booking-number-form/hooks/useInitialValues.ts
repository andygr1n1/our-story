import type { IBookingNumberForm } from '../types'

export const useInitialValues = (): { initialValues: IBookingNumberForm } => {
    return {
        initialValues: {
            bookingNumber: '',
        },
    }
}
