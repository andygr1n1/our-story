import { useEffect, useState } from 'react'
import { floor, padStart } from 'lodash-es'
import { useTranslation } from 'react-i18next'

export const Timer: React.FC<{ variant?: 'small' }> = ({ variant }) => {
    const [daysLeft, setDaysLeft] = useState(0)
    const [timeLeft, setTimeLeft] = useState('')
    const { t } = useTranslation()

    useEffect(() => {
        const targetDate = new Date('2025-05-02T00:00:00')

        const updateTimer = () => {
            const now = new Date()
            const difference = targetDate.getTime() - now.getTime()

            const days = floor(difference / (1000 * 60 * 60 * 24))
            const hours = floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = floor((difference % (1000 * 60)) / 1000)
            setDaysLeft(days)
            setTimeLeft(
                ` ${padStart(hours.toString(), 2, '0')}:${padStart(minutes.toString(), 2, '0')}:${padStart(seconds.toString(), 2, '0')}`,
            )
        }

        const timer = setInterval(updateTimer, 1000)
        updateTimer()

        return () => clearInterval(timer)
    }, [])

    const isSmall = variant === 'small'

    return isSmall ? (
        <div className='font-bold font-kzen  flex flex-col items-center'>
            <div className='flex text-alpha caveat-500'>
                {daysLeft} {t('days_short_version')}
            </div>
            <div className='relative text-center text-alpha caveat-500'>
                <span className=' min-w-[200px] left-[-140px]'> {timeLeft}</span>
            </div>
        </div>
    ) : (
        <div className='my-32 text-8xl font-bold font-kzen gap-4 flex flex-col items-center'>
            <div className='flex text-alpha caveat-500'>
                {daysLeft} {t('days_short_version')}
            </div>
            <div className='h-20 relative text-center text-alpha caveat-500'>
                <span className='absolute min-w-[200px] left-[-140px]'> {timeLeft}</span>
            </div>
        </div>
    )
}
