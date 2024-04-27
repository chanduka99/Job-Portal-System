import React from 'react';
import { TextInput,Textarea,  } from 'flowbite-react';
import { useState, useRef } from 'react';
import {  useNavigate } from 'react-router-dom';
import profilpic from '../assets/Registration/profilepic.svg'
import {db} from '../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

function EmployerAccountSetupForm() {
    const aboutMeRef = useRef('');
    const companyNameRef = useRef('');
    const cordinatorRef = useRef('');
    const countryRef = useRef('');
    const cityRef = useRef('');
    const websiteUrlRef = useRef('');
    const contactNumberRef = useRef('');
    const {currentUser} = useAuth();
    const navigate = useNavigate();

    
    async function handleFinish(){
        try{
            const userRef = doc(db, "users", currentUser.email );
            // var details = [aboutMeRef.current.value, companyNameRef.current.value, cordinatorRef.current.value, countryRef.current.value, cityRef.current.value, websiteUrlRef.current.value, companyNameRef.current.value,]
            console.log(currentUser.email);
            await updateDoc(userRef, {
                aboutMe:aboutMeRef.current.value,
                employerName:companyNameRef.current.value,
                cordinatorName:cordinatorRef.current.value,
                country:countryRef.current.value,
                city:cityRef.current.value,
                websiteUrl:websiteUrlRef.current.value,
                contactNumber:contactNumberRef.current.value,
                postedJobs:[],
              });
              toast.success('Details Added Successfully', {
                position: 'top-right',
                style: {
                  background: '#4DE318',
                  color: '#FFFFFF',
                }});
                navigate('/post-job/get-started/confirm-email/e-account-setup/e-dashboard-jobs-feed');
        }catch(error){
            toast.error('Error', {
                position: 'top-right',
                style: {
                  background: '#FF3538',
                  color: '#FFFFFF',
                },
              });
              console.log(error);
            //   navigate('/post-job/get-started/confirm-email/e-account-setup/e-dashboard-jobs-feed');
        }
        
    }



    const containerStyle = {
        width:"100vh",
        marginTop:"30px",
        borderRadius: "8px",
        border:"1px solid rgba(92,101,117,0.23)",
        boxShadow:"0 0 21px 1px rgba(0,0,0,0.12)",
      };
  return (
    <div className=' flex justify-center mb-6 '>
        <div style={containerStyle} className='p-8'>
            <div className='flex gap-12 items-center'>
                <h1 className='font-black text-xl'>Info</h1>
                <p className=' text-sm text-secondary text-opacity-80'>Set up your account.You can change these settings anytime.
                    <br/>Data entered here will be used to find job recommendations for you.
                </p>
            </div>
            <div className='md:grid grid-cols-2 my-6 gap-12'>

                <img src={profilpic} className='w-48'/>
                {/* About me */}
                <Textarea
                id='aboutMe'
                placeholder='About me/us'
                className=' mt-14 items- h-28'
                // required ={true}
                ref={aboutMeRef}
                />
                <div>
                    {/* company name */}
                    <TextInput className='mt-6'
                    id='companyName'
                    placeholder='Company Name'
                    ref={companyNameRef}
                    required ={true}
                    />

                    {/* cordinator name */}
                    <TextInput className='mt-6'
                    id='cordinatorName'
                    placeholder='Cordinator Name'
                    ref={cordinatorRef}
                    required ={true}
                    />
                    {/* country */}
                    <TextInput className='mt-6'
                    id='country'
                    placeholder='Country'
                    ref={countryRef}
                    required ={true}
                    />

                    {/* city */}
                    <TextInput className='mt-6'
                    id='city'
                    placeholder='City'
                    ref={cityRef}
                    required ={true}
                    />

                </div>
                <div>
                    {/* website url */}
                    <TextInput className='mt-6'
                    id='websiteUrl'
                    placeholder='Website Url'
                    ref={websiteUrlRef}
                    // required ={true}
                    />
                    {/* contact number */}
                    <TextInput className='mt-6'
                    id='cotactNumber'
                    placeholder='Contact Number +94 ...'
                    ref={contactNumberRef}
                    required ={true}
                    />
                </div>
            </div>

            <div className=' mt-12'>
                {/* Finish button */}
                <div className=" flex justify-end  ">
                    {/* <Link to={"/post-job/get-started/confirm-email/e-account-setup/e-dashboard-jobs-feed"}> */}
                        <button
                        type="button"
                        className=" mt-9 text-xl  text-white text- w-32 h-10 rounded-[5px] bg-[#9445FF]"
                        onClick={handleFinish}
                        >
                        Finish
                        </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployerAccountSetupForm