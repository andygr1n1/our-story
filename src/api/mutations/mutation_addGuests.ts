import type { IRegistrationForm } from '@/modules/home/components/registration-form/types'
import { guestsSnapshotOut } from '@/modules/home/components/registration-form/helpers/guestsSnapshotOut'
import { addGuestsFragment } from '../fragments/fragment_addGuests'
import { graphql } from '../graphql/tada'
import { generateClient } from '../graphql/client'
import { server_sendEmails } from '../server/server_sendEmails'
import { compact } from 'lodash-es'

export const mutation_addGuests = async ({
    values,
    language,
}: {
    values: IRegistrationForm
    language: string
}) => {
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
                        booking_number
                    }
                }
            `,
            [addGuestsFragment],
        )

        const { objects } = guestsSnapshotOut({ values })

        const res = await client.request(addGuestsQuery, { objects, id: values.groupId })

        // server send emails
        const bookingId = res.update_wedding_groups_by_pk?.booking_number
        const guest1email = res?.insert_wedding_guests?.returning[0]?.email
        const guest2email = res?.insert_wedding_guests?.returning[1]?.email
        const emails = compact([guest1email, guest2email])
        if (emails?.length && bookingId) {
            await server_sendEmails({ emails, bookingId, language })
        }
        //

        return bookingId
    } catch (error) {
        console.error(error)
        throw new Error(error)
        // no need to resolve error here, it will be handled in human readable format
        // return await resolveError(error)
    }
}
