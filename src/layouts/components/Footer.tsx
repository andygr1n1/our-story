import { Timer } from '@/components/Timer'

import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='w-full h-full flex-col min-h-[120px] gap-4 flex justify-center items-center'>
                <div className='flex justify-between flex-col md:flex-row gap-2 w-full px-10'>
                    <div className='text-sm md:flex-[30%] text-alpha xxs:text-center md:text-left my-10 md:my-0 roboto-slab-100 sm:items-start flex flex-col justify-center font-light'>
                        <div>{`${t('Daria')}: +373 78 579 842 | +351 936 744 188 `}</div>
                        <div>{`${t('Andrei')}: +373 68 953 913`}</div>
                    </div>
                    <div className='great-vibes-regular md:flex-[30%] text-center text-2xl text-alpha'>
                        {`${t('Daria')} ᥫ᭡ ${t('Andrei')}`}
                        <Timer variant='small' />
                    </div>
                    <div className='md:flex-[30%] text-center text-2xl my-10 md:my-0'>{/* empty block grid */}</div>
                </div>
            </div>
        </>
    )
}
