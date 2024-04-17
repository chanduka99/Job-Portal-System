import {db} from './config';
import { collection, addDoc,doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"; 

export async function PostJob(jobObj){
    try{
        // //adding a job to the job collection 
        const jobRef =   await addDoc(collection(db, "jobs"), {
            employerEmail:jobObj.employerEmail,
            jobTimeType:jobObj.jobTimeType,
            jobEmployeeType:jobObj.jobEmployeeType,
            remote:jobObj.remote? "remote":jobObj.remote,
            country:jobObj.country,
            city:jobObj.city,
            address:jobObj.address,
            contactEmail:jobObj.contactEmail,
            jobDescription:jobObj.jobDescription,
            jobResponsibilites:jobObj.jobResponsibilites,
            knowledgeAndExperience:jobObj.knowledgeAndExperience,
            experienceLevel:jobObj.experienceLevel,
            employeeCapacity:jobObj.employeeCapacity
          });
          console.log(jobRef.id);
          //adding the newly added job under the postedJobs field of the employer
          const userRef = doc(db, "users", jobObj.employerEmail);
        //   let temp = [userRef.postedJobs];
        //   console.log("temp first :",temp)
        //    temp = temp.concat(["12312414"]);
        //    console.log("temp next :",temp);
          await updateDoc(userRef, {
            postedJobs:arrayUnion(jobRef.id)
          });

    }catch(error){
        console.log(error);
    }
}