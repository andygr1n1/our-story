import { Timer } from '@/components/Timer'
import Tippy from '@tippyjs/react'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='w-full h-full flex-col min-h-[200px] gap-4 flex justify-center items-center'>
                <Tippy
                    // options
                    content={t('Telegram group')}
                    interactive={true}
                    // interactiveBorder={20}
                    // delay={100}
                    // position='bottom'
                    // trigger='click'
                >
                    <div
                        id='telegram-link'
                        data-tooltip-id='telegram-link'
                        data-tooltip-content='Telegram group'
                        className='custom-icon w-fit h-fit rounded-full max-w-[40px] max-h-[40px]'
                    >
                        <span className='simple-icons--telegram max-w-[40px] max-h-[40px] w-full h-full'></span>
                    </div>
                </Tippy>

                <div className='flex justify-between gap-2 w-full px-10'>
                    <div className='great-vibes-regular text-alpha text-2xl flex-[30%]'>
                        <div>Andrei: +373 68 953 913</div>
                        <div>Daria: +373 78 579 842 | +351 936 744 188 </div>
                    </div>
                    <div className='great-vibes-regular flex-[30%] text-center text-alpha text-2xl'>
                        Daria ᥫ᭡ Andrei
                    </div>
                    <div className='great-vibes-regular flex-[30%] text-center text-alpha text-2xl'>
                        <div className='flex justify-end items-center'>
                            <Timer variant='small' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
