import type { IRegistrationForm } from '@/modules/home/components/registration-form/types'
import { graphql, graphQLClient } from '../graphql'
import { guestsSnapshotOut } from '@/modules/home/components/registration-form/helpers/guestsSnapshotOut'
import { addGuestsFragment } from '../fragments/fragment_addGuests'

export const mutation_addGuests = async ({ values }: { values: IRegistrationForm }) => {
    const client = graphQLClient()

    const addGuestsQuery = graphql(`
        mutation addGuests($objects: [wedding_guests_insert_input!]!) {
            insert_wedding_guests(objects: $objects) {
                returning {
                    id
                    ...AddGuestsFragment
                }
            }
        }
    `, [addGuestsFragment])

    const { objects } = guestsSnapshotOut({ values })

    return await client.request(addGuestsQuery, { objects })
}
