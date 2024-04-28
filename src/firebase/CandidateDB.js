import {db} from './config';
import {storage} from './config';
import {ref,uploadBytes } from "firebase/storage";
import { collection, addDoc,doc, updateDoc, arrayUnion, arrayRemove,getDocs } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';

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
export async function ApplyForJob(companyName,emailforApplication,contactNo,cv,currentUserDetail,currentEmail){
        
    try{
        //getting the applicant name from users collection 
        let currentUserObj;
        currentUserDetail.then((result)=>{
            console.log(result);
            currentUserObj = result;
        })
        const cvRef = ref(storage,`employeeCVs/${currentEmail+"->"+companyName+"-"+ uuidv4()}`);
        uploadBytes(cvRef, cv).then((snapshot) => {
            console.log('Uploaded a blob or file!');
          });

    }catch(error){
        console.log("ApplyForJob error:",error);
    }
}