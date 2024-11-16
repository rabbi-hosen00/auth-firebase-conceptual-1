import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';

const SignUp = () => {

    const {handleSignUp} = useContext(authContext)


  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;
    if(password.length < 6){
        alert("password must be at least 6 characters")
        return
    }
    if(password !== conPassword){
        alert("password didn't match")
        return
    }

    if( !/^(?=.*[a-z])(?=.*[A-Z])(?=(.*\d){2})(?=.*[!@#$%^&*()]).+$/.test(password)){
        alert(" password is not valid");
        return;
    }
      
    // console.log(email,password,conPassword);
    handleSignUp(email,password)
  }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
               Email: <input name="email" type='text' /><br></br>
               password:<input name="password" type='password' /><br></br>
               confirm password: <input name="conPassword" type='password' />
               <button type='submit'>sign up</button>
            </form>
        </div>
    );
};

export default SignUp;