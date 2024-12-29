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
            <div className='text-center text-lg px-4 max-w-xl my-10 mx-auto font-kzen'>{t('dressCodeDescription')}</div>
            <div className='flex justify-center gap-4 '>
                <DressCodeExample color='#D5A6BD' />
                <DressCodeExample color='#D0E6D2' />
                <DressCodeExample color='#E2725B' />
                <DressCodeExample color='#F5DF4D' />
                <DressCodeExample color='#53B0AE' />
            </div>
        </motion.div>
    )
}

export const DressCodeExample: React.FC<{ color: string }> = ({ color }) => {
    return <div className={`w-14 h-14 rounded-full `} style={{ backgroundColor: color }}></div>
}
