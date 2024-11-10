import type { IRegistrationForm } from '../types'

export const useInitialValues = (): { initialValues: IRegistrationForm } => {
    return {
        initialValues: {
            name1: '',
            secondName1: '',
            email1: '',
            phone1: '',
            otherInfo1: '',
            name2: '',
            secondName2: '',
            email2: '',
            phone2: '',
            otherInfo2: '',
            solo: false,
        },
    }
}
