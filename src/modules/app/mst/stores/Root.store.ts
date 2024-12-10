import { server_handleLogin } from '@/api/server/server_handleLogin'
import {
    getSessionJWTFromCookie,
    removeSessionJWTFromCookie,
    setAccessIdInCookie,
    setSessionJWTInCookie,
} from '@/helpers/universalCookie'
import { castToSnapshot, flow, toGenerator, types } from 'mobx-state-tree'
import { User$ } from './User.store'
import { query_fetchUser } from '@/api/queries/query_fetchUser'
import { jwtDecode } from 'jwt-decode'

export const Root$ = types
    .model('Root$', {
        registrationId: '',
        bookingId: '',
        /* $ */
        'w2ddfwefqwddqwdfewf1__dqdw': true,
        isLoading: false,
        error: false,
        guestOne: types.maybeNull(User$),
        guestTwo: types.maybeNull(User$),
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
        get bookingIdFromJwt(): string | null {
            const token = getSessionJWTFromCookie()
            if (!token) return null
            const tokenData = jwtDecode(token) as { booking_number: string }
            return tokenData.booking_number || null
        },
    }))
    .volatile(() => ({
        abortController: new AbortController(),
    }))
    .actions((self) => ({
        fetchUser: flow(function* fetchUser({ registrationId }: { registrationId: string }) {
            const res = yield* toGenerator(query_fetchUser({ registrationId }))
            if (res) {
                self.guestOne = castToSnapshot(res?.[0] || null)
                self.guestTwo = castToSnapshot(res?.[1] || null)
            }
        }),
    }))
    .actions((self) => ({
        resetAbortController() {
            self.abortController.abort()
            self.isLoading = false
            self.abortController = new AbortController()
            self.isLoading = true
        },
        validateRegistrationId() {
            const token = getSessionJWTFromCookie()

            if (self.registrationId && token) {
                const tokenData = jwtDecode(token) as { id: string }

                if (tokenData.id !== self.registrationId) {
                    removeSessionJWTFromCookie()
                }
            }
        },
        validateBookingId() {
            if (self.bookingId && self.bookingIdFromJwt) {
                if (self.bookingIdFromJwt !== self.bookingId) {
                    removeSessionJWTFromCookie()
                }
            }
        },
    }))
    .actions((self) => ({
        handleLogin: flow(function* _handleLogin() {
            self.resetAbortController()
            self.validateRegistrationId()
            self.validateBookingId()

            const res = yield server_handleLogin({
                registrationId: self.registrationId,
                bookingId: self.bookingId,
                signal: self.abortController.signal,
            })

            res && console.log('res', res, { jwt: res.refreshJWT, decoded: jwtDecode(res.refreshJWT) })

            if (res?.registration) {
                self.bookingId = res.bookingId
                const url = new URL(window.location.href)
                url.searchParams.delete('registration')
                url.searchParams.set('booking', res.bookingId)
                window.history.replaceState({}, '', url.toString())
                setAccessIdInCookie(res.accessJWT)
                setSessionJWTInCookie(res.refreshJWT)
                yield self.fetchUser({ registrationId: res.registrationId })
            } else if (res?.refreshJWT) {
                console.log('refreshJWT', { jwt: res.refreshJWT, decoded: jwtDecode(res.refreshJWT) })
                setAccessIdInCookie(res.accessJWT)
                setSessionJWTInCookie(res.refreshJWT)
                yield self.fetchUser({ registrationId: res.registrationId })
            } else {
                self.registrationId = ''
                self.bookingId = ''
                const url = new URL(window.location.href)
                url.searchParams.delete('registration')
                url.searchParams.delete('booking')
                window.history.replaceState({}, '', url.toString())
            }
            self.isLoading = false
            // verify registrationId
        }),
    }))
    .actions((self) => ({
        redirectToBookingIfAuthorized: flow(function* _redirectToBookingIfAuthorized() {
            if (getSessionJWTFromCookie()) {
                self.resetAbortController()

                const res = yield server_handleLogin({
                    registrationId: self.registrationId,
                    bookingId: self.bookingId,
                    signal: self.abortController.signal,
                })

                if (res?.registration) {
                    self.bookingId = res.bookingId
                } else {
                    removeSessionJWTFromCookie()
                }
            }
        }),
    }))
