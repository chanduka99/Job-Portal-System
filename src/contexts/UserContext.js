import React , {createContext, useContext, useEffect , useState} from 'react';
import {useAuth} from './AuthContext';
import {db} from '../firebase/config';
import { collection,doc, getDoc } from "firebase/firestore"; 

const UserContext = createContext();


export function useUser(){
    return useContext(UserContext);
}


export  function UserProvider({children}){

    const [currentUserDetail,setCurrentUserDetail] = useState();
    const [loading,setLoading] = useState(true);
    const {currentUser} = useAuth();

    let userObj;
    //get the userr deatails
    async function getUser(){
        try {
                    //getting the user name from users collection 
                    const docRef = doc(db, "users",currentUser.email);
                    const docSnap = await getDoc(docRef);
                     userObj = docSnap.data();
                    //  console.log(userObj);
                    return userObj;
        } catch (error) {
            console.log("No such document!")
        }
    }

    useEffect(()=> {
        if(currentUser != null){
            setCurrentUserDetail(getUser());
        } 
        setLoading(false)
        },[])


const value ={
    currentUserDetail,
}

    return (
        <UserContext.Provider value = {value}>
            {!loading && children}
        </UserContext.Provider>
    )
}