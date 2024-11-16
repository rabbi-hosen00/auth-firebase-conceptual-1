import React, { createContext, useEffect, } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.cofic';
import Navbar from '../Navbar/Navbar';

export const authContext = createContext()

const MainLayout = () => {

    const [user, setUsr] = useState(null)
    const [loading, setLoading] = useState(true)


    const gooleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const handleGooleLogin = () => {
        setLoading(true)
        signInWithPopup(auth, gooleProvider)
        // .then((result) => {
        //     setUsr(result)
        // })
    }
    const handleGitHubLogin = () => {
        setLoading(true)
        signInWithPopup(auth, gitHubProvider)
        // .then((result) => {
        //     setUsr(result)
        // })
    }

    const handleSignUp = (email,password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result.user);
        })
    }
    const handleSignIn = (email,password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result.user);
        })
    }


    const handaleLogout = () => {
        setLoading(true)
        signOut(auth)
            .then((res) => {
                console.log(res)
            })
    }

    useEffect(() => {
        console.log("user state", user)
    }, [user])



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUsr(currentUser)
            }else{
                setUsr(null)
            }
            setLoading(false)

            //     if (user) {
            //         // User is signed in, see docs for a list of available properties
            //         // https://firebase.google.com/docs/reference/js/auth.user
            //         const uid = user.uid;
            //         // ...
            //     } else {
            //         // User is signed out
            //         // ...
            //     }
        });

        return () => {
            unsubscribe()
        }

    }, [])




    const authData = {
        handleGooleLogin,
        handleGitHubLogin,
        user,
        setUsr,
        handaleLogout,
        handleSignUp,
        handleSignIn,
        loading
    }


    return (
        <div>
            <authContext.Provider value={authData}>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </authContext.Provider>

        </div>
    );
};

export default MainLayout;