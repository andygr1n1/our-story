import { useTranslation } from 'react-i18next'
export const Title = () => {
    const { t } = useTranslation()

    return (
        <div className='mb-10 flex flex-col gap-10 z-[0]'>
            <div className='text-center mx-auto caveat-500 text-alpha text-2xl'>
                {t('Please join us to celebrate our marriage')}
            </div>
            <h1 className='great-vibes-regular text-center text-[#c0822b] font-bold tracking-wider  '>
                {t('Daria & Andrei')}
            </h1>
            <div className='text-center mx-auto caveat-500 text-alpha text-2xl'>{t('May 2, 2025')}</div>
        </div>
    )
}
// Please join us to celebrate our marriage
