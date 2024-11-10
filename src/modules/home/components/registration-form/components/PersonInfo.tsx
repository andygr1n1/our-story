import { useFormikContext } from 'formik'
import { Form, Accordion } from 'react-bootstrap'
import type { IRegistrationForm } from '../types'
export const PersonInfo = ({ personNumber }: { personNumber: number }) => {
    const formikContext = useFormikContext<IRegistrationForm>()

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
            <Accordion.Header>Guest {personNumber}</Accordion.Header>
            <Accordion.Body className='flex flex-col gap-4'>
                <Form.Group controlId={`name${personNumber}`}>
                    <Form.Label>First Name</Form.Label>
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

                <Form.Group controlId={`secondName${personNumber}`}>
                    <Form.Label>Second Name</Form.Label>
                    <Form.Control
                        name={`secondName${personNumber}`}
                        size='lg'
                        type='text'
                        placeholder='Enter your second name'
                        value={personSecondName}
                        onChange={formikContext.handleChange}
                        isInvalid={!!personSecondNameError}
                    />
                    {personSecondNameError && (
                        <Form.Control.Feedback type='invalid'>{personSecondNameError}</Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group controlId={`email${personNumber}`}>
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
                    {personEmailError && (
                        <Form.Control.Feedback type='invalid'>{personEmailError}</Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group controlId={`phone${personNumber}`}>
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
                    {personPhoneError && (
                        <Form.Control.Feedback type='invalid'>{personPhoneError}</Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group controlId={`otherInfo${personNumber}`}>
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
