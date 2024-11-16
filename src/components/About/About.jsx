import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';
import { Navigate } from 'react-router-dom';

const About = () => {

    const { handleGooleLogin , setUser,user } = useContext(authContext);

   
    // console.log(user)
  
    // if(!user){
    //     return <Navigate to="/signin"></Navigate>
    // }


    return (
        <div>
            
            i am about
            {user?.displayName}
            {user?.email}
            <button onClick={handleGooleLogin}>goole login</button>
            <button onClick={()=> setUser("karim")}>abc</button>
        </div>
    );
};

export default About;