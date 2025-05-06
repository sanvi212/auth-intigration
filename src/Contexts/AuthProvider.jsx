import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContexts";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase_Intit/firebase_init";

const AuthProvider = ({ children }) => {
    const [user,setuser] = useState(null)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    signInWithEmailAndPassword(auth,email,password)
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
    })
    return () => {
        onSubscribe();
    }
},[])

  const userInfo = { user,createUser,singInUser};

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
