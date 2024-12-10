export type IRegistrationForm = {
    groupId: string
    id1?: string
    name1: string
    secondName1: string
    email1: string
    phone1: string
    otherInfo1: string

    id2?: string
    name2: string
    secondName2: string
    email2: string
    phone2: string
    otherInfo2: string
    /*  */
    /* if only 1 person is registering */
    solo?: boolean
}
