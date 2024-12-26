import { useTranslation } from 'react-i18next'
import { cn } from '@/helpers/cn'

export const Head = () => {
    const { i18n } = useTranslation()

    const setLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('i18nextLng', lng)
    }

    return (
        <div className='w-full h-full z-[20] relative min-h-[50px] border-b-solid border-gray-200 border-b-[0.5px]'>
            <div className='flex absolute bottom-2 right-2'>
                <div
                    className={cn(
                        'relative text-alpha min-w-7 min-h-7 font-atkinson cursor-pointer',
                        i18n.language === 'en' ? 'underline' : '',
                    )}
                    onClick={() => setLanguage('en')}
                >
                    en
                </div>
                <div
                    className={cn(
                        'relative min-w-7 min-h-7 text-alpha font-atkinson cursor-pointer',
                        i18n.language === 'ru' ? 'underline' : '',
                    )}
                    onClick={() => setLanguage('ru')}
                >
                    ru
                </div>
            </div>
        </div>
    )
}
