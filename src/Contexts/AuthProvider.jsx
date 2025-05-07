import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContexts";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase_Intit/firebase_init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
    const [user,setuser] = useState(null)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
    
  };

  const singInUser = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth,email,password)
  }

  const singOutUser = () => {
    setLoading(true)
    return signOut(auth)
    
  }

//   onAuthStateChanged(auth, (currentUser) => {
//     if(currentUser){
//         console.log('has current user', currentUser)
//     }
//     else{
//         console.log('current user', currentUser)
//     }
//   })
useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('current user inside ', currentUser);
        setuser(currentUser);
        setLoading(false);
    })
    return () => {
        onSubscribe();
    }
},[])

  const userInfo = { user,createUser,singInUser,singOutUser,loading};

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
