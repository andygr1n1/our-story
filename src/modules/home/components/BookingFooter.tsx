import Tippy from '@tippyjs/react'
import { useTranslation } from 'react-i18next'
export const BookingFooter = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='w-full h-full flex min-h-[120px] gap-10 justify-center items-center'>
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
                        className='custom-icon w-fit h-fit rounded-full max-w-16 max-h-16'
                    >
                        <a href='https://t.me/+fZ1Dpl9tXc85YWVi' target='_blank'>
                            <span className='simple-icons--telegram w-16 h-16'></span>
                        </a>
                    </div>
                </Tippy>
                <Tippy
                    // options
                    content={t('miadora')}
                    interactive={true}
                    // interactiveBorder={20}
                    // delay={100}
                    // position='bottom'
                    // trigger='click'
                >
                    <div
                        id='castle-link'
                        data-tooltip-id='castle-link'
                        data-tooltip-content='Castle'
                        className='custom-icon bg-alpha items-center justify-center rounded-full max-w-16 max-h-16 w-16 h-16'
                    >
                        <a
                            href='https://miadora.md/ru/'
                            target='_blank'
                            className='flex items-center justify-center w-full h-full'
                        >
                            <span className='material-symbols--home-pin-rounded w-14 h-14 text-white'></span>
                        </a>
                    </div>
                </Tippy>
            </div>
        </>
    )
}
