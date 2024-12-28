import { useTranslation } from 'react-i18next'
import { useScroll, motion, useTransform, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { WeddingDateCalendar } from './WeddingDateCalendar'

export const Title = () => {
    const { t } = useTranslation()
    const { scrollY } = useScroll()
    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false,
        initialInView: false,
    })

    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.65,
            y: 50,
        },
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.65, y: 50 }}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 2, ease: 'easeOut' }}
            ref={ref}
            className='my-10 flex flex-col gap-10 max-h-[500px] max-w-[500px] mx-auto'
        >
            <h1 className='great-vibes-regular flex flex-col gap-3 my-10 text-center text-[#c0822b] font-bold tracking-wider'>
                <span className='transform -rotate-12 translate-x-[-25px]'>{t('Daria')}</span>
                <div className='transform -rotate-12 translate-x-[250px] items-center justify-center mt-8 absolute'>
                    <img src='/img/heart.png' alt='Heart' className='w-20 h-20' />
                </div>
                <span className='transform -rotate-12 translate-x-[30px] mt-3'>{t('Andrei')}</span>
            </h1>
        </motion.div>
    )
}
