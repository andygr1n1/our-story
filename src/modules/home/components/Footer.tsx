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

                <div className='great-vibes-regular text-center text-alpha text-2xl'>Daria ᥫ᭡ Andrei</div>
            </div>
        </>
    )
}
