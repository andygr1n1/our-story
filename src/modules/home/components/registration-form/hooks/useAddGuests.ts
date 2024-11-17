import { useMutation } from '@tanstack/react-query'
import { type IRegistrationForm } from '../types'
import { mutation_addGuests } from '@/api/mutations/mutation_addGuests'
import { toastError } from '@/helpers/processMessage'

export const useAddGuests = () => {
    const mutation = useMutation({
        mutationFn: async ({ values }: { values: IRegistrationForm }) => {
            return mutation_addGuests({ values })
        },
        onError: (error) => {
            if (error.message.includes('wedding_guests_email_key')) {
                toastError('Email already exists')
            } else if (error.message.includes('wedding_guests_phone_key')) {
                toastError('Phone number already exists')
            } else {
                toastError('Something went wrong, please contact us directly')
            }
        },
    })

    const addGuests = ({
        values,
        onSuccess,
        onSettled,
    }: {
        values: IRegistrationForm
        onSuccess?: () => void
        onSettled?: () => void
    }) => {
        mutation.mutate({ values }, { onSuccess, onSettled })
    }

    return { addGuests }
}
