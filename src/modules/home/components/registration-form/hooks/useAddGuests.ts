import { useMutation } from '@tanstack/react-query'
import { type IRegistrationForm } from '../types'
import { mutation_addGuests } from '@/api/mutations/mutation_addGuests'
import { toastError } from '@/helpers/processMessage'
import { useTranslation } from 'react-i18next'

export const useAddGuests = () => {
    const { t, i18n } = useTranslation()
    const mutation = useMutation({
        mutationFn: async ({ values }: { values: IRegistrationForm }) => {
            return mutation_addGuests({ values, language: i18n.language })
        },
        onError: (error) => {
            if (error.message.includes('wedding_guests_email_key')) {
                toastError(t('Email already exists'))
            } else if (error.message.includes('wedding_guests_phone_key')) {
                toastError(t('Phone number already exists'))
            } else {
                toastError(t('Something went wrong, please contact us directly'))
            }
        },
    })

    const addGuests = ({
        values,
        onSuccess,
        onSettled,
    }: {
        values: IRegistrationForm
        onSuccess?: (res: string | null | undefined) => void
        onSettled?: () => void
    }) => {
        mutation.mutate({ values }, { onSuccess, onSettled })
    }

    return { addGuests }
}
