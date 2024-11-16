import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../MainLayout/MainLayout';

const Navbar = () => {

    const { handaleLogout } = useContext(authContext)

    return (
        <div>
            <NavLink to="">Home</NavLink>
            <NavLink to="/about" style={{ marginLeft: "20px" }} >About</NavLink>
            <NavLink to="/signin" style={{ marginLeft: "20px" }}>signIn</NavLink>
            <NavLink to="/signup" style={{ marginLeft: "20px" }}>SignUp</NavLink>
            <NavLink to="/profile" style={{ marginLeft: "20px" }}>Profile</NavLink>
            <button onClick={handaleLogout}>LogOut</button>
        </div>
    );
};

export default Navbar;