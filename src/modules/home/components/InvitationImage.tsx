import { useTranslation } from 'react-i18next'
import invitation from '/img/invitation.jpeg'
import { cn } from '@/helpers/cn'

export const InvitationImage = () => {
    const { i18n } = useTranslation()

    const setLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('i18nextLng', lng)
    }

    return (
        <div className='w-full h-full z-[20] relative'>
            <div className='relative w-full h-full'>
                <img
                    src={invitation}
                    alt='invitation'
                    className='w-full h-full min-h-[200px] max-h-[400px] object-cover shadow-sm'
                />
            </div>

            <div className='flex gap-2 absolute bottom-2 right-2'>
                <button
                    className={cn(
                        'btn relative min-w-10 min-h-10',
                        i18n.language === 'en' ? 'btn-primary custom-button-bg' : 'btn-secondary',
                    )}
                    type='button'
                    onClick={() => setLanguage('en')}
                >
                    <span className='font-atkinson absolute-center pb-1'> en</span>
                </button>
                <button
                    className={cn(
                        'btn relative min-w-10 min-h-10',
                        i18n.language === 'ru' ? 'btn-primary custom-button-bg' : 'btn-secondary',
                    )}
                    type='button'
                    onClick={() => setLanguage('ru')}
                >
                    <span className='font-atkinson absolute-center pb-1'>ru</span>
                </button>
            </div>
        </div>
    )
}
