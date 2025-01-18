import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import Tippy from '@tippyjs/react'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia'

export const TelegramGroup = observer(() => {
    const { t } = useTranslation()
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }}>
            <div className='flex px-4 flex-col gap-2 max-w-xl text-center mx-auto text-lg font-kzen'>
                <div className='flex px-4 flex-col gap-2 max-w-xl text-center mx-auto text-lg font-kzen'>
                    <div>{t('joinOurTelegramGroup')}</div>
                </div>
                <div className='w-full h-full flex min-h-[120px] gap-10 justify-center items-center'>
                    <Tippy disabled={!!isMobile} content={t('Telegram group')} interactive={true}>
                        <div
                            id='telegram-link'
                            data-tooltip-id='telegram-link'
                            data-tooltip-content='Telegram group'
                            className='custom-icon w-fit h-fit rounded-full max-w-16 max-h-16'
                        >
                            <a href='https://t.me/+fZ1Dpl9tXc85YWVi' target='_blank'>
                                <span className='simple-icons--telegram w-16 h-16 text-alpha'></span>
                            </a>
                        </div>
                    </Tippy>
                </div>
            </div>
        </motion.div>
    )
})
