import { GraphQLClient } from 'graphql-request'
import { getAccessIdFromCookie, jwtVerify } from '@/helpers/universalCookie'

export const generateClient = async (): Promise<GraphQLClient | null> => {
    const endpoint = import.meta.env['VITE_CLIENT_ENDPOINT']

    const { ourstoryAccessJWT } = await getAccessJwt()

    if (!ourstoryAccessJWT) {
        console.error('generateClient: no access jwt')
        return null
    }

    const Authorization = `Bearer ${ourstoryAccessJWT}`

    return new GraphQLClient(endpoint, {
        headers: { Authorization },
    })
}

const getAccessJwt = async () => {
    const ourstoryAccessJWT: string | null | undefined = getAccessIdFromCookie()

    const verify = jwtVerify(ourstoryAccessJWT)

    if (!verify || !ourstoryAccessJWT) {
        return { ourstoryAccessJWT: null }
    }

    return { ourstoryAccessJWT }
}
