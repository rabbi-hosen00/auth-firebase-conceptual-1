import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../MainLayout/MainLayout';

const PrivateRoute = ({ children }) => {
    console.log(children)

    const { user,loading } = useContext(authContext)

    if(loading){
        return <div>loading..</div>
    }


    if (!user) {
        return <Navigate to="/signin"></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;