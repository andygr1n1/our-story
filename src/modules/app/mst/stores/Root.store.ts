import { server_handleLogin } from '@/api/server/server_handleLogin'
import { setAccessIdInCookie, setSessionJWTInCookie } from '@/helpers/universalCookie'
import { flow, types } from 'mobx-state-tree'

export const Root$ = types
    .model('Root$', {
        registrationId: '',
        bookingId: '',
        /* $ */
        isLoading: false,
        error: false,
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
    .views((self) => ({
        get isRegistration(): boolean {
            return !!self.registrationId
        },
        get isBooking(): boolean {
            return !!self.bookingId
        },
        get isHome(): boolean {
            return !this.isRegistration && !this.isBooking
        },
    }))
    .volatile(() => ({
        abortController: new AbortController(),
    }))
    .actions((self) => ({
        // selectUser: flow(function* selectUser({ user }: { user: { id?: string; role?: string } }) {
        //     self.userId = user.id || ''
        //     self.role = user.role
        //     window.urqlClient = yield generateURQLClient({ new: true })
        //     window.genqlClient = yield generateTSClient({ new: true })
        //     self.initLoading = false
        // }),
        // autoLogin: flow(function* _autoLogin() {
        //     const res = yield server_getSessionCredentials()
        //     const credentials = res?.serverCredentials
        //     if (!credentials) return
        //     setAccessIdInCookie(credentials.accessJWT)
        //     setSessionJWTInCookie(credentials.sessionJWT)
        //     const data = parseJwt(credentials.accessJWT)
        //     self.userId = data?.id || ''
        //     self.role = data?.role
        //     self.initLoading = false
        // }),

        handleLogin: flow(function* _handleLogin() {
            self.abortController.abort()
            self.isLoading = false
            /*  */
            self.abortController = new AbortController()
            self.isLoading = true
            /*  */
            const res = yield server_handleLogin({
                registrationId: self.registrationId,
                bookingId: self.bookingId,
                signal: self.abortController.signal,
            })
            console.log('res', res)
            if (res?.refreshJWT) {
                console.log('refreshJWT', res.refreshJWT)
                setAccessIdInCookie(res.accessJWT)
                setSessionJWTInCookie(res.refreshJWT)
            }
            self.isLoading = false
            // verify registrationId
        }),
    }))
