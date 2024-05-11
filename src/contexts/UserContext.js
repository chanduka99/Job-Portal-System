import React , {createContext, useContext, useState ,useEffect} from 'react';
import {useAuth} from './AuthContext';
import {db} from '../firebase/config';
import { doc, getDoc } from "firebase/firestore"; 

const UserContext = createContext();


export function useUser(){
    return useContext(UserContext);
}


export  function UserProvider({children}){

    const [currentUserDetail,setCurrentUserDetail] = useState();
    const [loading,setLoading] = useState(false);
    const {currentUser} = useAuth();

    let userObj;
    //get the userr deatails
    async function GetUser(email){
        try {
                    //getting the user name from users collection 
                    console.log("newly logged users email :",email);
                    const docRef = doc(db,"users",email);
                     await getDoc(docRef).then((docSnap)=>{
                        if(docSnap.exists()) {
                            userObj = docSnap.data();
                            console.log("Document data:",userObj);
                          } else {
                            // docSnap.data() will be undefined in this case
                            console.log("No such document!");
                          }
                          
                        
                     });
                    //  userObj = docSnap.data();
                    //  console.log(userObj);
                    return userObj;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setLoading(true);
        const fetchUserDetails = async () => {
          if (currentUser != null) {
            const userObj = await GetUser(currentUser.email);
            setCurrentUserDetail(userObj);
          }
          setLoading(false);
        };
      
        fetchUserDetails();
        
      }, [currentUser]);
      

 async function SetUser(userCredentials){
        setLoading(true);
        let holdUser;
        // console.log("parameters passed in :",userCredentials.user.email);
        await GetUser(userCredentials.user.email).then(async(res)=>{
            console.log("response from the GetUser : ",res);
             setCurrentUserDetail(res);
             holdUser = res;
             setLoading(false);
            
        });
        return holdUser;
    }



const value ={
    SetUser,
    currentUserDetail,
}

    return (
        <UserContext.Provider value = {value}>
            {!loading && children}
        </UserContext.Provider>
    )
}