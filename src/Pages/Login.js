// Login.js
import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { auth } from './firebase';
// import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('Logged in successfully');
      navigate('/dashboard'); // Redirect to the dashboard or another page on successful login
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };


  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Forgot Password');
  };

  const handleSignUp = () => {
    // Implement your sign up logic here
    console.log('Sign Up');
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h1>Login Page</h1>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>

            <Link to="/forgot-password" onClick={handleForgotPassword} className="ml-2">
              Forgot Password?
            </Link>
          </Form>

          <p className="mt-3">
            Don't have an account?{' '}
            <Link to="/signup" onClick={handleSignUp}>
              Sign Up
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
