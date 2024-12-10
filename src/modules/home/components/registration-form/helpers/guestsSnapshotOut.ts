import type { IAddGuestsFragment } from '@/api/fragments/fragment_addGuests'
import type { IRegistrationForm } from '../types'

export const guestsSnapshotOut = ({ values }: { values: IRegistrationForm }): { objects: IAddGuestsFragment[] } => {
    const objects: IAddGuestsFragment[] = []

    const guest1: IAddGuestsFragment = {
        id: values.id1 || crypto.randomUUID(),
        group_id: values.groupId,
        first_name: values.name1,
        last_name: values.secondName1,
        email: values.email1,
        phone: values.phone1,
        more_info: values.otherInfo1,
    }

    let guest2: IAddGuestsFragment | undefined

    if (!values.solo) {
        guest2 = {
            id: values.id2 || crypto.randomUUID(),
            group_id: values.groupId,
            first_name: values.name2,
            last_name: values.secondName2,
            email: values.email2,
            phone: values.phone2,
            more_info: values.otherInfo2,
        }
    }

    objects.push(guest1)
    if (guest2) objects.push(guest2)

    return {
        objects,
    }
}
