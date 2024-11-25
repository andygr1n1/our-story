import { useTranslation } from 'react-i18next'
import invitation from '/img/invitation.jpeg'
import { cn } from '@/helpers/cn'
import { useEffect } from 'react'

export const InvitationImage = () => {
    const { i18n } = useTranslation()

    const setLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('i18nextLng', lng)
    }

    useEffect(() => {
        const savedLng = localStorage.getItem('i18nextLng')
        if (savedLng) {
            i18n.changeLanguage(savedLng)
        }
    }, [])

    return (
        <div className='w-full h-full z-[20] relative'>
            <div className='relative w-full h-full'>
                <img
                    src={invitation}
                    alt='invitation'
                    className='w-full h-full min-h-[200px] max-h-[400px] object-cover shadow-sm'
                />
                <div className='great-vibes-regular absolute top-[10px] left-[60px] w-full text-[#c0822b] text-4xl p-4 text-center'>
                    А теперь пребывают сии три: вера, надежда, любовь; <br /> но любовь из них больше.
                    <div className='flex items-end justify-center text-xl '> 1 Коринфянам 13:13</div>
                </div>
            </div>

            <div className='flex gap-2 absolute bottom-2 right-2'>
                <button
                    className={cn('btn', i18n.language === 'en' ? 'btn-primary custom-button-bg' : 'btn-secondary')}
                    type='button'
                    onClick={() => setLanguage('en')}
                >
                    en
                </button>
                <button
                    className={cn('btn', i18n.language === 'ru' ? 'btn-primary custom-button-bg' : 'btn-secondary')}
                    type='button'
                    onClick={() => setLanguage('ru')}
                >
                    ru
                </button>
            </div>
        </div>
    )
}
