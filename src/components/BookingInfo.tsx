import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { useRoot$ } from '@/modules/app/mst/StoreProvider'

export const BookingInfo = observer(() => {
    const { t } = useTranslation()
    const { bookingId } = useRoot$()

    return (
        <motion.div
            className='my-20'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
        >
            <div className='flex px-4 flex-col gap-2 max-w-xl text-center mx-auto text-lg font-kzen'>
                <div>
                    {t('yourRegistrationNumberIs')}:
                    <span className='text-alpha underline font-bold mx-2'>{bookingId}</span>
                </div>
                <div>{t('bookingIdDescription')}</div>
            </div>
        </motion.div>
    )
})
