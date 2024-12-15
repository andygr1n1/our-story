import Tippy from '@tippyjs/react'
import type { IRegistrationForm } from '../types'
import { useFormikContext } from 'formik'
import { useTranslation } from 'react-i18next'

export const ButtonToggleEditBooking = () => {
    const formikContext = useFormikContext<IRegistrationForm>()
    const { disabled } = formikContext.values
    const { t } = useTranslation()
    return (
        <div className='flex justify-end absolute z-[60] top-[43px] right-[45px] duration-300'>
            {disabled ? (
                <Tippy content={t('edit')} interactive={true}>
                    <div
                        id='edit-link'
                        data-tooltip-id='edit-link'
                        data-tooltip-content='Edit'
                        className='custom-icon text-white w-fit h-fit rounded-full max-w-8 max-h-8 cursor-pointer hover:animate-pulse'
                        onClick={() => {
                            formikContext.setFieldValue('disabled', false)
                        }}
                    >
                        <span className='icon--edit w-8 h-8'></span>
                    </div>
                </Tippy>
            ) : (
                <Tippy content={t('cancel')} interactive={true}>
                    <div
                        id='cancel-link'
                        data-tooltip-id='cancel-link'
                        data-tooltip-content='Cancel'
                        className='custom-icon text-white w-fit h-fit rounded-full max-w-8 max-h-8 cursor-pointer hover:animate-pulse'
                        onClick={() => {
                            formikContext.setFieldValue('disabled', true)
                            formikContext.resetForm()
                        }}
                    >
                        <span className='iconoir--cancel text-white w-8 h-8'></span>
                    </div>
                </Tippy>
            )}
        </div>
    )
}
