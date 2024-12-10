import { types } from 'mobx-state-tree'

export const User$ = types.model('User$', {
    id: types.identifier,
    first_name: types.string,
    last_name: types.maybeNull(types.string),
    email: types.maybeNull(types.string),
    phone: types.maybeNull(types.string),
    more_info: types.maybeNull(types.string),
})
