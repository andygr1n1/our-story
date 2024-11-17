import { Button, Accordion } from 'react-bootstrap'
import { PersonInfo } from './components/PersonInfo'
import { Field, Form, useFormikContext } from 'formik'
import { useEffect, useState } from 'react'
import type { IRegistrationForm } from './types'
import { useTranslation } from 'react-i18next'

const RegistrationForm = () => {
    const formikContext = useFormikContext<IRegistrationForm>()
    const { solo } = formikContext.values
    const [activeKey, setActiveKey] = useState<string[]>(['1', '2'])
    const { t } = useTranslation()
    useEffect(() => {
        setActiveKey(solo ? ['1'] : ['1', '2'])
    }, [solo])

    return (
        <Form className='z-[20] relative'>
            <Accordion activeKey={activeKey}>
                <PersonInfo personNumber={1} />
                {!solo && <PersonInfo personNumber={2} />}
            </Accordion>

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
                <label htmlFor='solo' className='form-check-label ml-2 select-none cursor-pointer caveat-500 text-2xl'>
                    {t('Solo registration')}
                </label>
            </div>

            <Button size='lg' type='submit' className='mt-4 w-full custom-button-bg btn-primary'>
                <span className='caveat-500 text-2xl'>{t('Register')}</span>
            </Button>
        </Form>
    )
}

export default RegistrationForm
