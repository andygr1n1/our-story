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
        <>
            {/* <div className='text-center mx-auto caveat-500 text-2xl'>
                {t('Please join us to celebrate our marriage')}
            </div> */}
            <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 2, ease: 'easeOut' }}
                ref={ref}
                className='my-10 flex flex-col gap-10 z-[0]'
            >
                <h1 className='great-vibes-regular flex flex-col gap-3 my-10 text-center text-[#c0822b] font-bold tracking-wider  '>
                    <span className='transform -rotate-12 translate-x-[-25px]'>{t('Daria')}</span>
                    <span className='transform -rotate-12 translate-x-[30px]'>{t('Andrei')}</span>
                </h1>
            </motion.div>
            <WeddingDateCalendar />
        </>
    )
}
