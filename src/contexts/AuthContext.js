import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth} from '../firebase/config'



const AuthContext = createContext();


//exporting the useContext such that it can be used inside children after calling the useAuth();
export function useAuth(){
  return useContext(AuthContext);
}



export function AuthProvider({children}) {
  const [currentUser,setCurrentUser] = useState();
  const [loading,setLoading] = useState(true);

  //signUp user
 function SignUp(email,password){
  try{
     return createUserWithEmailAndPassword(auth,email,password);
  }catch(error){
    console.log("signUp failed",error)
  }
}

//signIn user
 function SignIn(email,password){
  try{
    return signInWithEmailAndPassword(auth,email,password);
  }catch(error){
    console.log("login failed",error);
  }
}

//logout user
 function LogOut(){
  try{
     return signOut();
  }catch(error){
    console.log("logout failed",error);
  }
}


useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged(user=>{
    console.log(user);
    setCurrentUser(user);
    setLoading(false);
  },[])

  console.log("i am inside AuthContext");

  //onAuthStateChange is a listner,listening to the state change of the user auhtentication.
  //onAuthStateChange returns a function. If we call that function onAuthStateChange listner will stop listening to the state change 
  return ()=>{unsubscribe();}

})

  const value = {
    currentUser,
    SignUp,
    SignIn,
    LogOut
  }


  return (
    <AuthContext.Provider value = {value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

