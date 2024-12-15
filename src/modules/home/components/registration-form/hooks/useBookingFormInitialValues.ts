import { useRoot$ } from '@/modules/app/mst/StoreProvider'
import type { IRegistrationForm } from '../types'

export const useBookingFormInitialValues = (): { initialValues: IRegistrationForm } => {
    const { guestOne, guestTwo, registrationIdFromJwt } = useRoot$()
    return {
        initialValues: {
            groupId: registrationIdFromJwt || '',
            // guest one
            id1: guestOne?.id || '',
            name1: guestOne?.first_name || '',
            secondName1: guestOne?.last_name || '',
            email1: guestOne?.email || '',
            phone1: guestOne?.phone || '',
            otherInfo1: guestOne?.more_info || '',
            // guest two
            id2: guestTwo?.id || '',
            name2: guestTwo?.first_name || '',
            secondName2: guestTwo?.last_name || '',
            email2: guestTwo?.email || '',
            phone2: guestTwo?.phone || '',
            otherInfo2: guestTwo?.more_info || '',
            // solo?
            solo: !guestTwo?.id,
            disabled: true,
            bookingEditor: true,
        },
    }
}
