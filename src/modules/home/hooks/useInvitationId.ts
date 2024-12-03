import { useRoot$ } from '@/modules/app/mst/StoreProvider'
import { useEffect } from 'react'

export const useInvitationId = () => {
    const { onChangeField } = useRoot$()
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const registrationParam = urlParams.get('registration')
        const bookingParam = urlParams.get('booking')
        if (registrationParam) {
            onChangeField('registrationId', registrationParam)
        } else if (bookingParam) {
            onChangeField('bookingId', bookingParam)
        }
    }, [])
}
