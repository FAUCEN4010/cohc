import React from 'react'
import { useNavigate } from 'react-router-dom'
import authStore from '../stores/authStore';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function SignupForm() {
    const store = authStore();
    
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        await store.signup();
        navigate("/login");
    }

    return (

    <Container fluid>
        <Row>
            <Col>

                <form onSubmit={handleSignup}>
                    <div>
                        <label htmlFor="email">First Name</label>
                        <input 
                            onChange={store.updateSignupForm} 
                            value={store.signupForm.fname}
                            type="fname" 
                            name="fname" 
                            id="fname" />
                        <label htmlFor="email">Last Name</label>
                        <input 
                            onChange={store.updateSignupForm} 
                            value={store.signupForm.lname}
                            type="text" 
                            name="lname" 
                            id="lname" />
                    </div>
                    <div>
                    <label htmlFor="email">Date of Birth</label>
                    <input 
                        onChange={store.updateSignupForm} 
                        value={store.signupForm.dob}
                        type="date" 
                        name="dob" 
                        id="dob" />
                    </div>
                    <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        onChange={store.updateSignupForm} 
                        value={store.signupForm.email}
                        type="text" 
                        name="email" 
                        id="email" />
                    </div>
                    <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        onChange={store.updateSignupForm} 
                        value={store.signupForm.password}
                        type="password" 
                        name="password" 
                        id="password" />
                    </div>
                    <button type="submit">Sign up</button>
                </form>

            </Col>
        </Row>
    </Container>


    )
}