import { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);
  
    return (
    <>
    <Card> 
        <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <div className="mb-4">
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmationRef} required />
                </Form.Group>
            </Form>
            </div>
            <Button className="w-100" type="submit">Sign Up</Button>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
        Already have an account? <Link to='/login'>Log In   </Link>
    </div>
    </>
  )
}
