import { useFormikContext } from 'formik'
import { Form, Accordion } from 'react-bootstrap'
import type { IRegistrationForm } from '../types'
export const PersonInfo = ({ personNumber }: { personNumber: number }) => {
    const formikContext = useFormikContext<IRegistrationForm>()

    const personName = formikContext.values[`name${personNumber}` as keyof IRegistrationForm] as string
    const personEmail = formikContext.values[`email${personNumber}` as keyof IRegistrationForm] as string
    const personPhone = formikContext.values[`phone${personNumber}` as keyof IRegistrationForm] as string
    const personOtherInfo = formikContext.values[`otherInfo${personNumber}` as keyof IRegistrationForm] as string

    const personNameError =
        formikContext.touched[`name${personNumber}` as keyof IRegistrationForm] &&
        (formikContext.errors[`name${personNumber}` as keyof IRegistrationForm] as string)

    const personEmailError =
        formikContext.touched[`email${personNumber}` as keyof IRegistrationForm] &&
        (formikContext.errors[`email${personNumber}` as keyof IRegistrationForm] as string)

    const personPhoneError =
        formikContext.touched[`phone${personNumber}` as keyof IRegistrationForm] &&
        (formikContext.errors[`phone${personNumber}` as keyof IRegistrationForm] as string)

    return (
        <Accordion.Item eventKey={personNumber.toString()}>
            <Accordion.Header>Person {personNumber}</Accordion.Header>
            <Accordion.Body>
                <Form.Group controlId={`name${personNumber}`}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name={`name${personNumber}`}
                        size='lg'
                        type='text'
                        placeholder='Enter your name'
                        value={personName}
                        onChange={formikContext.handleChange}
                        isInvalid={!!personNameError}
                    />
                    {personNameError && <Form.Control.Feedback type='invalid'>{personNameError}</Form.Control.Feedback>}
                </Form.Group>

                <Form.Group controlId={`email${personNumber}`} className='mt-3'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name={`email${personNumber}`}
                        size='lg'
                        type='email'
                        placeholder='Enter your email'
                        value={personEmail}
                        onChange={formikContext.handleChange}
                        isInvalid={!!personEmailError}
                    />
                    {personEmailError && <Form.Control.Feedback type='invalid'>{personEmailError}</Form.Control.Feedback>}
                </Form.Group>

                <Form.Group controlId={`phone${personNumber}`} className='mt-3'>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        name={`phone${personNumber}`}
                        size='lg'
                        type='tel'
                        placeholder='Enter your phone number'
                        pattern='[0-9]*'
                        value={personPhone}
                        onChange={formikContext.handleChange}
                        isInvalid={!!personPhoneError}
                    />
                    {personPhoneError && <Form.Control.Feedback type='invalid'>{personPhoneError}</Form.Control.Feedback>}
                </Form.Group>

                <Form.Group controlId={`otherInfo${personNumber}`} className='mt-3'>
                    <Form.Label>Other information</Form.Label>
                    <Form.Control
                        name={`otherInfo${personNumber}`}
                        as='textarea'
                        size='lg'
                        placeholder='Enter your other information'
                        value={personOtherInfo}
                        onChange={formikContext.handleChange}
                    />
                </Form.Group>
            </Accordion.Body>
        </Accordion.Item>
    )
}
