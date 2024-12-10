import { addGuestsFragment } from '../fragments/fragment_addGuests'
import { generateClient } from '../graphql/client'
import { graphql } from '../graphql/tada'

export const query_fetchUser = async ({ registrationId }: { registrationId: string }) => {
    try {
        const client = await generateClient()
        if (!client) return

        const query = graphql(
            `
                query fetchUser($id: uuid!) {
                    wedding_groups_by_pk(id: $id) {
                        wedding_guests {
                            ...AddGuestsFragment
                        }
                    }
                }
            `,
            [addGuestsFragment],
        )

        return await client
            .request(query, { id: registrationId })
            ?.then((res) => res?.wedding_groups_by_pk?.wedding_guests)
    } catch (error) {
        console.error(error)
        return
    }
}
