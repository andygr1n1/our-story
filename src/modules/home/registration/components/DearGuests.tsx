import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const DearGuests = () => {
    const { t } = useTranslation()
    return (
        <motion.div
            className=''
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            // viewport={{ once: true }}
            // style={{ x }}
        >
            <div className='text-lg px-4 max-w-[500px] my-20 mx-auto font-kzen'>{t('dearGuestsIntro')}</div>
        </motion.div>
    )
}
