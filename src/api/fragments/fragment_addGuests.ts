import { graphql, type ResultOf } from '../graphql/tada'

export const addGuestsFragment = graphql(`
    fragment AddGuestsFragment on wedding_guests @_unmask {
        id
        group_id
        first_name
        last_name
        email
        phone
        more_info
    }
`)

export type IAddGuestsFragment = ResultOf<typeof addGuestsFragment>
