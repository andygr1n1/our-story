import type { IRegistrationForm } from '@/modules/home/components/registration-form/types'
import { guestsSnapshotOut } from '@/modules/home/components/registration-form/helpers/guestsSnapshotOut'
import { addGuestsFragment } from '../fragments/fragment_addGuests'
import { graphql } from '../graphql/tada'
import { generateClient } from '../graphql/client'

export const mutation_addGuests = async ({ values }: { values: IRegistrationForm }) => {
    try {
        const client = await generateClient()
        if (!client) return

        if (!values.groupId) throw new Error('No registration ID found')

        const addGuestsQuery = graphql(
            `
                mutation addGuests($objects: [wedding_guests_insert_input!]!, $id: uuid!) {
                    insert_wedding_guests(
                        objects: $objects
                        on_conflict: {
                            constraint: wedding_guests_pkey
                            update_columns: [first_name, last_name, email, phone, more_info]
                        }
                    ) {
                        returning {
                            ...AddGuestsFragment
                        }
                    }

                    update_wedding_groups_by_pk(pk_columns: { id: $id }, _set: { registration: true }) {
                        id
                    }
                }
            `,
            [addGuestsFragment],
        )

        const { objects } = guestsSnapshotOut({ values })

        return await client.request(addGuestsQuery, { objects, id: values.groupId })
    } catch (error) {
        // no need to resolve error here, it will be handled in human readable format
        // return await resolveError(error)
        console.error(error)
        return
    }
}
