import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const DressCode = () => {
    const { t } = useTranslation()

    return (
        <motion.div
            className='my-20'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
        >
            <div className='flex px-4 flex-col gap-2 max-w-xl text-center mx-auto'>
                <div className='caveat-500 text-3xl'>{t('ourWishes')}</div>
            </div>
            <div className='text-center text-lg px-4 max-w-xl my-10 mx-auto font-kzen'>{t('dressCodeDescription')}</div>
            <div className='flex justify-center gap-4'>
                <DressCodeExample color='#78B3CE' />
                <DressCodeExample color='#9DBDFF' />
                <DressCodeExample color='#B7B7B7' />
                <DressCodeExample color='#E5D0AC' />
                <DressCodeExample color='#EDDFE0' />
            </div>
        </motion.div>
    )
}

export const DressCodeExample: React.FC<{ color: string }> = ({ color }) => {
    return (
        <div
            className={`w-14 h-14 rounded-full transition-transform transform hover:scale-110 hover:shadow-2xl`}
            style={{ backgroundColor: color }}
        ></div>
    )
}
