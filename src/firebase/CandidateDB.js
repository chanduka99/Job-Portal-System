import {db} from './config';
import {storage} from './config';
import {getDownloadURL, ref,uploadBytes } from "firebase/storage";
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
export async function ApplyForJob(companyName,emailforApplication,contactNo,cv,currentUserDetail,currentEmail,jobId,employerEmail){
        //reference to the cv
        const cvRef = ref(storage,`employeeCVs/${currentEmail+"->"+companyName+"-"+ uuidv4()}`);
        await uploadBytes(cvRef, cv).then(async(snapshot) => {
            console.log('Uploaded a blob or file!');
            console.log(snapshot.metadata);
            // creating reference
            const cvPathRef = ref(storage,`employeeCVs/${snapshot.metadata.name}`);
            const downloadUrl = await getDownloadURL(ref(storage,`employeeCVs/${snapshot.metadata.name}`))
            //add the job as "applied jobs" under the candidate's user data
            const userRef = doc(db,"users", currentEmail);
            await updateDoc(userRef,{
                appliedJobs:arrayUnion(jobId)
            })
            //add the job as an job application for the relavant company/Employer
            const employerRef = doc(db,"users", employerEmail);
            await updateDoc(employerRef,{
                receivedApplications:arrayUnion({
                    jobId:jobId,
                    cv:downloadUrl,
                    contacEmail:emailforApplication,
                    contactNo: contactNo,

                    })
            })
          });

}