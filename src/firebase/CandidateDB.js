import {db} from './config';
import {storage, ref} from './config';
import { collection, addDoc,doc, updateDoc, arrayUnion, arrayRemove,getDocs } from "firebase/firestore"; 
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';

//get all jobs
export async function GetJobs(){
    try{
        // let tempSet = new Set();
        let temp = [];
        await getDocs(collection(db, "jobs")).then((querySnapshot)=>{
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                //   console.log(doc.id, " => ", doc.data());
                // tempSet.add({...doc.data(), id:doc.id});
                temp.push({...doc.data(), id:doc.id});
            });
        });
        return temp;
    //   return tempSet;
    }catch(error){
        console.log("GetsJobs error:",error);
    }
}

// apply for selected job
export async function ApplyForJob(companyName,email,contactNo,cv,currentUserDetail){
        
    try{
        //getting the applicant name from users collection 
        currentUserDetail.then((result)=>console.log(result))
        
        // const docRef = doc(db, "users", jobObj.employerEmail);
        // const docSnap = await getDoc(docRef);
        // let employerName;
        // if (docSnap.exists()) {
        //     let userObj = docSnap.data();
        //     employerName = userObj.employerName;
        // } else {
        //     // docSnap.data() will be undefined in this case
        //     console.log("No such document!");
        // }
        // const cvRef = ref(storage,`employeeCVs/${}`)
    }catch(error){
        console.log("ApplyForJob error:",error);
    }
}