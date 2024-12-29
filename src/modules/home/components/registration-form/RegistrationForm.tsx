import { Button, Accordion } from 'react-bootstrap'
import { PersonInfo } from './components/PersonInfo'
import { Field, Form, useFormikContext } from 'formik'
import { useEffect, useState } from 'react'
import type { IRegistrationForm } from './types'
import { useTranslation } from 'react-i18next'
import { useRoot$ } from '@/modules/app/mst/StoreProvider'

const RegistrationForm = () => {
    const { bookingId } = useRoot$()
    const formikContext = useFormikContext<IRegistrationForm>()
    const { solo, disabled } = formikContext.values
    const [activeKey, setActiveKey] = useState<string[]>(['1', '2'])
    const { t } = useTranslation()
    useEffect(() => {
        setActiveKey(solo ? ['1'] : ['1', '2'])
    }, [solo])

    return (
        <>
            <Form className='z-[20] relative'>
                <Accordion activeKey={activeKey}>
                    <PersonInfo personNumber={1} />
                    {!solo && <PersonInfo personNumber={2} />}
                </Accordion>

                {!disabled && (
                    <div className='mt-4 form-check flex items-center'>
                        <Field
                            type='checkbox'
                            name='solo'
                            id='solo'
                            className='form-check-input'
                            checked={solo}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                formikContext.setFieldValue('solo', e.target.checked)
                            }}
                            disabled={formikContext.isSubmitting}
                        />

                        <label htmlFor='solo' className='form-check-label ml-2 select-none cursor-pointer text-base'>
                            {t('Solo registration')}
                        </label>
                    </div>
                )}

                {!disabled && (
                    <Button
                        disabled={formikContext.isSubmitting}
                        size='lg'
                        type='submit'
                        className='mt-4 w-full min-h-[50px] flex items-center justify-center custom-button-bg btn-primary'
                    >
                        {formikContext.isSubmitting ? (
                            <span className='line-md--uploading-loop'></span>
                        ) : (
                            <span className='caveat-500 text-2xl'>{bookingId ? t('update') : t('register')}</span>
                        )}
                    </Button>
                )}
            </Form>
        </>
    )
}

export default RegistrationForm
