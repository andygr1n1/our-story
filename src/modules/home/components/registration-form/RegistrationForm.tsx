import { Button, Accordion } from 'react-bootstrap'
import { PersonInfo } from './components/PersonInfo'
import { Field, Form, useFormikContext } from 'formik'
import { useState } from 'react'
import type { IRegistrationForm } from './types'

const RegistrationForm = () => {
    const formikContext = useFormikContext<IRegistrationForm>()
    const { solo } = formikContext.values
    const [activeKey, setActiveKey] = useState<string[]>(['1', '2'])

    return (
        <Form>
            <Accordion activeKey={activeKey}>
                <PersonInfo personNumber={1} />
                <PersonInfo personNumber={2} />
            </Accordion>

            <div className='mt-4 form-check'>
                <Field
                    type='checkbox'
                    name='solo'
                    id='solo'
                    className='form-check-input'
                    checked={solo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setActiveKey(e.target.checked ? ['1'] : ['1', '2'])
                        formikContext.setFieldValue('solo', e.target.checked)
                    }}
                />
                <label htmlFor='solo' className='form-check-label ml-2 select-none cursor-pointer'>
                    Solo Registration
                </label>
            </div>

            <Button size='lg' type='submit' className='mt-4 w-full custom-button-bg btn-primary'>
                Register
            </Button>
        </Form>
    )
}

export default RegistrationForm
