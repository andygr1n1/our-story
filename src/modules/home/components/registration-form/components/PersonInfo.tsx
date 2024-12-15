import { useFormikContext } from 'formik'
import { Form, Accordion } from 'react-bootstrap'
import type { IRegistrationForm } from '../types'
import { useTranslation } from 'react-i18next'
export const PersonInfo = ({ personNumber }: { personNumber: number }) => {
    const { t } = useTranslation()
    const formikContext = useFormikContext<IRegistrationForm>()

    const disabled = formikContext.values.disabled

    const personName = formikContext.values[`name${personNumber}` as keyof IRegistrationForm] as string
    const personSecondName = formikContext.values[`secondName${personNumber}` as keyof IRegistrationForm] as string
    const personEmail = formikContext.values[`email${personNumber}` as keyof IRegistrationForm] as string
    const personPhone = formikContext.values[`phone${personNumber}` as keyof IRegistrationForm] as string
    const personOtherInfo = formikContext.values[`otherInfo${personNumber}` as keyof IRegistrationForm] as string

    const personNameError =
        formikContext.touched[`name${personNumber}` as keyof IRegistrationForm] &&
        (formikContext.errors[`name${personNumber}` as keyof IRegistrationForm] as string)

    const personSecondNameError =
        formikContext.touched[`secondName${personNumber}` as keyof IRegistrationForm] &&
        (formikContext.errors[`secondName${personNumber}` as keyof IRegistrationForm] as string)

    const personEmailError =
        formikContext.touched[`email${personNumber}` as keyof IRegistrationForm] &&
        (formikContext.errors[`email${personNumber}` as keyof IRegistrationForm] as string)

    const personPhoneError =
        formikContext.touched[`phone${personNumber}` as keyof IRegistrationForm] &&
        (formikContext.errors[`phone${personNumber}` as keyof IRegistrationForm] as string)

    return (
        <Accordion.Item eventKey={personNumber.toString()}>
            <Accordion.Header>
                <div className='flex items-center gap-2'>
                    <span className='caveat-500 text-2xl'>{t('Guest')}</span>
                    <span className='caveat-500 text-2xl'>{personNumber}</span>
                </div>
            </Accordion.Header>
            <Accordion.Body className='flex flex-col gap-4'>
                <Form.Group controlId={`name${personNumber}`}>
                    <Form.Label>{t('First Name')}</Form.Label>
                    <Form.Control
                        name={`name${personNumber}`}
                        size='lg'
                        type='text'
                        // placeholder='Enter your name'
                        value={personName}
                        onChange={formikContext.handleChange}
                        isInvalid={!!personNameError}
                        readOnly={disabled}
                    />
                    {personNameError && <Form.Control.Feedback type='invalid'>{personNameError}</Form.Control.Feedback>}
                </Form.Group>

                <Form.Group controlId={`secondName${personNumber}`}>
                    <Form.Label>{t('Last Name')}</Form.Label>
                    <Form.Control
                        name={`secondName${personNumber}`}
                        size='lg'
                        type='text'
                        // placeholder='Enter your second name'
                        value={personSecondName}
                        onChange={formikContext.handleChange}
                        isInvalid={!!personSecondNameError}
                        readOnly={disabled}
                    />
                    {personSecondNameError && (
                        <Form.Control.Feedback type='invalid'>{personSecondNameError}</Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group controlId={`email${personNumber}`}>
                    <Form.Label>{t('Email')}</Form.Label>
                    <Form.Control
                        name={`email${personNumber}`}
                        size='lg'
                        type='email'
                        // placeholder='Enter your email'
                        value={personEmail}
                        onChange={formikContext.handleChange}
                        isInvalid={!!personEmailError}
                        readOnly={disabled}
                    />
                    {personEmailError && (
                        <Form.Control.Feedback type='invalid'>{personEmailError}</Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group controlId={`phone${personNumber}`}>
                    <Form.Label>{t('Phone')}</Form.Label>
                    <Form.Control
                        name={`phone${personNumber}`}
                        size='lg'
                        type='tel'
                        // placeholder='Enter your phone number'
                        pattern='[0-9]*'
                        value={personPhone}
                        onChange={formikContext.handleChange}
                        isInvalid={!!personPhoneError}
                        readOnly={disabled}
                    />
                    {personPhoneError && (
                        <Form.Control.Feedback type='invalid'>{personPhoneError}</Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group controlId={`otherInfo${personNumber}`}>
                    <Form.Label>{t('Wishes')}</Form.Label>
                    <Form.Control
                        name={`otherInfo${personNumber}`}
                        as='textarea'
                        size='lg'
                        rows={5}
                        // placeholder='Other information'
                        value={personOtherInfo}
                        onChange={formikContext.handleChange}
                        readOnly={disabled}
                    />
                </Form.Group>
            </Accordion.Body>
        </Accordion.Item>
    )
}
