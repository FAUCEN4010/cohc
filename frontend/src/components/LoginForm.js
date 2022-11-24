import React from 'react'
import { useNavigate } from 'react-router-dom'
import authStore from '../stores/authStore';
import {Input} from 'semantic-ui-react'


export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        await store.login();

        // Navigate
        navigate('/');
    }

    return (

<div>

        

    <form onSubmit={handleLogin}>
    <br /><br />
      <h3 className="text-center">Log in</h3>
      <br />


      <div className="form-outline mb-4 text-center" >
      <label className="form-label" htmlFor="email">Email: &nbsp;</label>
      <Input 
                onChange={store.updateLoginForm} 
                value={store.loginForm.email}
                type="email" 
                name="email" 
                id="email" />
      </div>


      <div className="form-outline mb-4 text-center">
      <label className="form-label" htmlFor="password">Password: &nbsp;</label>
      <Input 
                onChange={store.updateLoginForm} 
                value={store.loginForm.password}
                type="password" 
                name="password" 
                id="password" />
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary btn-block mb-4 text-center">Log in</button>
      </div>


      <div className="text-center">
        <p>Not a member? <a href="/signup">Sign up</a></p>
      </div>
    </form>

</div>














    )
}