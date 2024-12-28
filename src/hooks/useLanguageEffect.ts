import i18next from 'i18next'
import { useEffect } from 'react'

export const useLanguageEffect = () => {
    useEffect(() => {
        const savedLng = localStorage.getItem('i18nextLng')
        if (savedLng) {
            i18next.changeLanguage(savedLng)
        }
    }, [])
}
