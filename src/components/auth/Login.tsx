import { useState, useRef, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthProvider';
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import axios from '../../api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
  //@ts-ignore
  const { setAuth } = useContext(AuthContext);  
  const emailRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current?.focus();
}, []);

useEffect(() => {
    setError('');
}, [email, password]);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await axios.post(LOGIN_URL, 
            JSON.stringify({email, password}), 
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,
            }   
        );
        const accessToken = response?.data?.token;
        const roles = response?.data?.roles;
        setAuth({ email, password, accessToken, roles });
        setEmail('');
        setPassword('');
        setSuccess(true);
    } catch (error){
        console.error(error);
        errorRef.current?.focus();
    }

    setEmail('');
    setPassword('');
    setSuccess(true);
}

  
    return (
    <div>
      <p ref={errorRef} className={error ? 'error': 'offscreen'}>
        {error}
      </p>
      <h2 className="text-center mb-4">Sign In</h2>
      <div className="mb-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    id='email'
                    ref={emailRef} 
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={email}
                    required />
                </Form.Group>
            </Form>
            </div>
            <Button className="w-100" type="submit">Sign In</Button>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to='/'>Sign Up</Link>
            </div>
    </div>
  )
}

export default Login;