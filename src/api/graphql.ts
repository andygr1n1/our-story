import { initGraphQLTada } from 'gql.tada'
import type { introspection } from '../graphql-env.d.ts'
import { GraphQLClient } from 'graphql-request'

export const graphql = initGraphQLTada<{
    introspection: introspection
    scalars: {
        uuid: string
        bigint: number
        smallint: number
        jsonb: never
        date: string
        timestamptz: string
        updated_at: string | null
    }
}>()

export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada'
export { readFragment } from 'gql.tada'

export const graphQLClient = () =>
    new GraphQLClient(import.meta.env['VITE_CLIENT_ENDPOINT'], {
        headers: { 'x-hasura-admin-secret': import.meta.env['VITE_X_HASURA_ADMIN_SECRET'] },
    })
