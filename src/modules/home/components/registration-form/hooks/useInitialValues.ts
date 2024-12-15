import { useRoot$ } from '@/modules/app/mst/StoreProvider'
import type { IRegistrationForm } from '../types'

export const useInitialValues = (): { initialValues: IRegistrationForm } => {
    const { guestOne, guestTwo, registrationId } = useRoot$()

    return {
        initialValues: {
            groupId: registrationId,
            // guest one
            id1: guestOne?.id || '',
            name1: guestOne?.first_name || '',
            secondName1: '',
            email1: '',
            phone1: '',
            otherInfo1: '',
            // guest two
            id2: guestTwo?.id || '',
            name2: guestTwo?.first_name || '',
            secondName2: '',
            email2: '',
            phone2: '',
            otherInfo2: '',
            // solo?
            solo: false,
        },
    }
}
