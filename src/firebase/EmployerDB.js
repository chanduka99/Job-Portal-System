import {db} from './config';
import { collection, addDoc,doc, updateDoc, arrayUnion, arrayRemove, getDoc , setDoc  } from "firebase/firestore"; 

export async function PostJob(jobObj){
    try{
        //getting the employer name from users collection 
        const docRef = doc(db, "users", jobObj.employerEmail);
        const docSnap = await getDoc(docRef);
        let employerName;
        if (docSnap.exists()) {
          let userObj = docSnap.data();
          employerName = userObj.employerName;
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
        // //adding a job to the job collection 
        const jobRef =   await addDoc(collection(db, "jobs"), {
            employerName:employerName,
            employerEmail:jobObj.employerEmail,
            jobTimeType:jobObj.jobTimeType,
            jobEmployeeType:jobObj.jobEmployeeType,
            remote:jobObj.remote? "remote":jobObj.remote,
            country:jobObj.country,
            city:jobObj.city,
            address:jobObj.address,
            contactEmail:jobObj.contactEmail,
            jobTitle:jobObj.jobTitle,
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

    }catch(err){
        console.log(err.message);
    }
}

//this function is called inside the handleRegister of EmployerSingupForm 
export async function SignUpUserSetup(email,name,status){
  await setDoc(doc(db, "users", email), {
    employerName:name,
    type:"employer",
    employerStatus:status
  });
}