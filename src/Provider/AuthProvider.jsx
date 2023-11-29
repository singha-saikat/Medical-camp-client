// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";

import { createContext, useEffect, useState } from "react";

import app from "../../Firebase/Firebase.config.js"



 export const AuthContext = createContext(null);

 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true)

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            
            setUser(currentUser)
            setLoading(false);
           
    
        });
        return () => {
            unSubscribe();
        }
      },[user?.email])
     const authInfo ={
        user,
        createUser,
        signIn,
        logout,
        setLoading,
        loading
        
     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;