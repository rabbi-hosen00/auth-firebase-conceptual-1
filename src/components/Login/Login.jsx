import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const { handleSignIn } = useContext(authContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        // console.log(email,password,conPassword);
        handleSignIn(email, password)
    }

    return (
        <div>

            <form onSubmit={handleSubmit} action="">
                Email: <input name="email" type='text' /><br></br>
                password:<input name="password" type='password' /><br></br>
                
                <button type='submit'>sign In</button>
                <NavLink to="/signup">SignUp</NavLink>
            </form>

        </div>
    );
};

export default Login;