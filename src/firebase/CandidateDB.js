import {db} from './config';
import { collection, addDoc,doc, updateDoc, arrayUnion, arrayRemove,getDocs } from "firebase/firestore"; 


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