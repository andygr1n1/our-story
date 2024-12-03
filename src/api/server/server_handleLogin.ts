import { resolveError } from '@/helpers/processMessage'
import { getSessionJWTFromCookie } from '@/helpers/universalCookie'
import ky from 'ky'

export type IServerHandleLogin = {
    registrationId: string
    bookingId: string
    signal: AbortSignal
}

export type IServerHandleLoginResponse = {
    message: string
    accessJWT: string
    sessionJWT: string
    registrationId: string
    bookingId: string
}

export const server_handleLogin = async ({
    registrationId,
    bookingId,
    signal,
}: IServerHandleLogin): Promise<IServerHandleLoginResponse | undefined> => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    try {
        const res = await ky
            .post(`${endpoint}/our-story/login/x-service-auto-login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'x-api-key': xapikey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: 'autoLogin',
                    registrationId,
                    bookingId,
                    sessionJWT: getSessionJWTFromCookie(),
                }),
                signal,
            })
            .json<IServerHandleLoginResponse | undefined>()

        if (!res) throw new Error('server_getSessionCredentials: response')
        return res
    } catch (error) {
        return await resolveError(error)
    }
}
