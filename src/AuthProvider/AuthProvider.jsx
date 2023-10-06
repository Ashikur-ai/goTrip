import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth,
            currentUser => {
                setUser(currentUser);
        }
        )
    }, [])
    
    


    // signin 
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const EmailSignIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const EmailLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signout 
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        googleSignIn,
        user,
        logOut,
        githubSignIn,
        EmailSignIn,
        EmailLogIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;