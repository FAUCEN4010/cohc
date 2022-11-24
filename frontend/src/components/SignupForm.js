import React from 'react'
import { useNavigate } from 'react-router-dom'
import authStore from '../stores/authStore';
import { Input } from 'semantic-ui-react'




export default function SignupForm() {
    const store = authStore();
    
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        await store.signup();
        navigate("/login");
    }

    return (

        <div>

        

        <form onSubmit={handleSignup}>
        <br /><br />
        <h3 className="text-center">Sign up</h3>
        <br />

        <div className="form-outline mb-4 text-center" >
        <label className="form-label" htmlFor="email">First Name: &nbsp;</label>
        <Input 
                onChange={store.updateSignupForm} 
                value={store.signupForm.fname}
                type="text" 
                name="fname" 
                id="fname"
                required
                />
        </div>
        
        <div className="form-outline mb-4 text-center" >
        <label className="form-label" htmlFor="email">Last Name: &nbsp;</label>
        <Input 
                onChange={store.updateSignupForm} 
                value={store.signupForm.lname}
                type="text" 
                name="lname" 
                id="lname"
                required
                />
        </div>

        <div className="form-outline mb-4 text-center" >
        <label className="form-label" htmlFor="email">Date of Birth: &nbsp;</label>
        <Input 
                onChange={store.updateSignupForm} 
                value={store.signupForm.dob}
                type="date" 
                name="dob" 
                id="dob"
                required
                />
        </div>

        <div className="form-outline mb-4 text-center" >
        <label className="form-label" htmlFor="email">Email: &nbsp;</label>
        <Input 
                    onChange={store.updateSignupForm} 
                    value={store.signupForm.email}
                    type="text" 
                    name="email" 
                    id="email"
                    required
                    />
        </div>


        <div className="form-outline mb-4 text-center">
        <label className="form-label" htmlFor="password">Password: &nbsp;</label>
        <Input 
                    onChange={store.updateSignupForm} 
                    value={store.signupForm.password}
                    type="password" 
                    name="password" 
                    id="password" 
                    required
                    />
        </div>

        <div className="text-center">
        <button type="submit" className="btn btn-primary btn-block mb-4 text-center">Sign up</button>
        </div>


        <div className="text-center">
        <p>Already a member? <a href="/login">Log in</a></p>
        </div>
    </form>
    
{/* 
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
                </form> */}
            </div>


    )
}