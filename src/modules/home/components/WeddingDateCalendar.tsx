import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import './WeddingDateCalendar.css'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { enGB, ru } from 'date-fns/locale'
import { motion } from 'framer-motion'
export const WeddingDateCalendar = () => {
    const { t } = useTranslation()
    const [selected, setSelected] = useState<Date>(new Date('2025-05-02'))

    const locale = i18next.language === 'en' ? enGB : ru

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            // viewport={{ once: true }}
            // style={{ x }}
        >
            <div className='w-full flex justify-center items-center flex-col select-none'>
                <div className='text-center mx-auto caveat-500 text-3xl pb-2'>{t('May 2, 2025')}</div>
                <DayPicker
                    classNames={
                        {
                            // day: cn('h-9 w-9 p-0 font-normal rounded-md', styles['x-calendar-day']),
                            // selected: 'text-red-500',
                        }
                    }
                    components={{
                        NextMonthButton: () => null as unknown as React.ReactElement,
                        PreviousMonthButton: () => null as unknown as React.ReactElement,
                        CaptionLabel: () => null as unknown as React.ReactElement,
                    }}
                    // onSelect={onSelect}
                    mode='single'
                    selected={selected}
                    onSelect={() => setSelected(new Date('2025-05-02'))}
                    defaultMonth={selected}
                    required
                    locale={locale}

                    // footer={<DayPickerFooter {...props} />}
                />
            </div>
        </motion.div>
    )
}
