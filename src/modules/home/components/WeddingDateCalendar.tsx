import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import './WeddingDateCalendar.css'
import { useTranslation } from 'react-i18next'
export const WeddingDateCalendar = () => {
    const { t } = useTranslation()
    const [selected, setSelected] = useState<Date>(new Date('2025-05-02'))

    return (
        <div className='w-full flex justify-center items-center flex-col select-none'>
            <div className='text-center mx-auto caveat-500 text-2xl'>{t('May 2, 2025')}</div>
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

                // footer={<DayPickerFooter {...props} />}
            />
        </div>
    )
}
