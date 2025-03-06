import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { /*  Map, AdvancedMarker,  */ APIProvider } from '@vis.gl/react-google-maps'
// import { isUnderDevelopment } from '@/helpers/isUnderDevelopment.helper'
export const PlanOfTheDay = () => {
    const { t } = useTranslation()
    // const markerPositionChurch = { lat: 46.978433276580745, lng: 28.86194137996509 }
    // const markerPositionMiadora = { lat: 46.98716551472651, lng: 28.845655311101467 }
    const apiKey = import.meta.env['VITE_GOOGLE_MAPS_API_KEY']

    return (
        <APIProvider apiKey={apiKey}>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
            >
                <div className='text-lg  mt-20 mx-auto font-kzen'>
                    <div className='flex px-4 flex-col gap-2 max-w-xl text-center mx-auto'>
                        <div className='caveat-500 text-3xl my-2'>- 14:30 - {t('guestsArrival')}</div>
                        <div className='caveat-500 text-3xl my-2'>- 15:00 - {t('marriageCeremony')}</div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
            >
                <div className='text-lg  mb-20 mx-auto font-kzen'>
                    <div className='flex px-4 flex-col gap-2 max-w-xl text-center mx-auto'>
                        <div className='caveat-500 text-3xl my-2'>- 16:00 - {t('wedding')}</div>
                        <div>{t('weddingAddress')}</div>
                    </div>
                    <div className='min-h-[300px] my-10 min-w-[400px] bg-gray-200 relative h-[500px] shadow-[0_0_24px_0_rgba(34,33,51,0.15)]'>
                        <iframe
                            width='100%'
                            height='100%'
                            style={{ border: '0' }}
                            loading='lazy'
                            allowFullScreen
                            referrerPolicy='no-referrer-when-downgrade'
                            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${t('weddingAddress')}`}
                        ></iframe>
                    </div>
                </div>
            </motion.div>
        </APIProvider>
    )
}
