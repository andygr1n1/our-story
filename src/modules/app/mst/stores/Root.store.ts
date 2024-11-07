import { types } from 'mobx-state-tree'

export const Root$ = types.model('Root$', {
    userId: '',
})
// .actions((self) => ({
//     onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
//         self[key] = value
//     },
// }))
// .views((self) => ({
// }))
// .actions((self) => ({
//     selectUser: flow(function* selectUser({ user }: { user: { id?: string; role?: string } }) {
//         self.userId = user.id || ''
//         self.role = user.role
//         window.urqlClient = yield generateURQLClient({ new: true })
//         window.genqlClient = yield generateTSClient({ new: true })
//         self.initLoading = false
//     }),

//     autoLogin: flow(function* _autoLogin() {
//         const res = yield server_getSessionCredentials()
//         const credentials = res?.serverCredentials
//         if (!credentials) return
//         setAccessIdInCookie(credentials.accessJWT)
//         setSessionJWTInCookie(credentials.sessionJWT)
//         const data = parseJwt(credentials.accessJWT)
//         self.userId = data?.id || ''
//         self.role = data?.role
//         self.initLoading = false
//     }),
// }))
