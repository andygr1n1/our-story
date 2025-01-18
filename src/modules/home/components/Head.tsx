import { useTranslation } from 'react-i18next'
import { cn } from '@/helpers/cn'
import { isUnderDevelopment } from '@/helpers/isUnderDevelopment.helper'

export const Head = () => {
    const { i18n } = useTranslation()

    const setLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('i18nextLng', lng)
    }

    return (
        <div className='w-full h-full z-[20] relative min-h-[50px] border-b-solid border-gray-200 border-b-[0.5px] shadow-md flex items-center'>
            {isUnderDevelopment() && (
                <a
                    className='relative min-w-5 min-h-5 font-atkinson cursor-pointer mx-4 flex items-center justify-center'
                    target='_blank'
                    href='https://github.com/users/andygr1n1/projects/7'
                >
                    <span className='line-md--github-twotone text-alpha hover:text-[#c0822b] duration-300 w-5 h-5'></span>
                </a>
            )}
            <div className='flex absolute bottom-2 right-2 items-center justify-center'>
                <div
                    className={cn(
                        'relative text-alpha min-w-7 min-h-7 font-atkinson cursor-pointer font-semibold',
                        i18n.language === 'en' ? 'underline' : '',
                    )}
                    onClick={() => setLanguage('en')}
                >
                    En
                </div>
                <div
                    className={cn(
                        'relative min-w-7 min-h-7 text-alpha font-atkinson cursor-pointer font-semibold',
                        i18n.language === 'ru' ? 'underline' : '',
                    )}
                    onClick={() => setLanguage('ru')}
                >
                    Ru
                </div>
            </div>
        </div>
    )
}
