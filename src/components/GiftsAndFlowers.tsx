import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const GiftsAndFlowers = () => {
    const { t } = useTranslation()

    return (
        <motion.div
            className='my-20'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
        >
            <div className='text-center text-lg px-4 max-w-xl my-10 mx-auto font-kzen'>{t('giftsAndFlowersDescription')}</div>
        </motion.div>
    )
}
