import { resolveError } from '@/helpers/processMessage'
import ky from 'ky'

export type IServerSendEmails = {
    emails: string[]
    bookingId: string
    language: string
}

export type IServerSendEmailsResponse = {
    message: string
}

export const server_sendEmails = async ({
    emails,
    bookingId,
    language,
}: IServerSendEmails): Promise<IServerSendEmailsResponse | undefined> => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    try {
        const res = await ky
            .post(`${endpoint}/our-story/login/x-service-email-send-info`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'x-api-key': xapikey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emails,
                    bookingId,
                    language,
                }),
            })
            .json<IServerSendEmailsResponse | undefined>()

        if (!res) throw new Error('server_sendEmails: response')
        return res
    } catch (error) {
        return await resolveError(error)
    }
}
