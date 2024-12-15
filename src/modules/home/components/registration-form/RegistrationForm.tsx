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
                        />

                        <label
                            htmlFor='solo'
                            className='form-check-label ml-2 select-none cursor-pointer caveat-500 text-2xl'
                        >
                            {t('Solo registration')}
                        </label>
                    </div>
                )}

                {!disabled && (
                    <Button
                        onClick={() => formikContext.setSubmitting(true)}
                        size='lg'
                        type='submit'
                        className='mt-4 w-full min-h-[50px] flex items-center justify-center custom-button-bg btn-primary'
                    >
                        {formikContext.isSubmitting ? (
                            <span className='line-md--uploading-loop'></span>
                        ) : (
                            <span className='caveat-500 text-2xl'>{bookingId ? t('update') : t('Register')}</span>
                        )}
                    </Button>
                )}
                {formikContext.isSubmitting && (
                    <div className='absolute z-50 opacity-45 left-0 top-0 bottom-0 right-0 bg-transparent w-full h-full flex justify-center items-center' />
                )}
            </Form>
        </>
    )
}

export default RegistrationForm
