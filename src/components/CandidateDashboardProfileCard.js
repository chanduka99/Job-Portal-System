import React, { useEffect } from 'react';
import { TextInput,Datepicker,Textarea, Label, Badge,Button ,Modal,Checkbox } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import profilpic from '../assets/Registration/profilepic.svg';
import { useUser } from '../contexts/UserContext';
import {toast} from 'sonner';


function CandidateProfileCard() {
    const {currentUserDetail} = useUser();


    const aboutMe = "3rd Year Undergradute Faculty of Engineering."
            let profilpic = '';
            let firstName = '';
            let lastName = '';
            let contactNum = '';
            let  faculty = '';
            let graduatingYear = '';
            let country = '';
            let city ='';
            let jobPreferences = ["Java Developer","Back-End Developer","Front-End Developer"];

    useEffect(()=>{
        if(currentUserDetail){
            profilpic = currentUserDetail.profilePic;
            firstName = currentUserDetail.firstName;
            lastName = currentUserDetail.lastName;
            contactNum = currentUserDetail.contactNum;
            faculty = currentUserDetail.faculty;
            graduatingYear = currentUserDetail.graduatingYear;
            country = currentUserDetail.country;
            city = currentUserDetail.city;
            jobPreferences = ["Java Developer","Back-End Developer","Front-End Developer"];
        }else{
            toast.warning('Failed load data please reload the page', {
                position: 'top-right',
                style: {
                  background: '#FFB800',
                  color: '#FFFFFF',
                },
              });
        }

    },[])

    const containerStyle1 = {
        // maxwidth:"70vw",
        marginTop:"8px",
        borderRadius: "8px",
        border:"1px solid rgba(92,101,117,0.23)",
        boxShadow:"0 0 21px 1px rgba(0,0,0,0.12)",

      };
      const containerStyle = {
        width:"100vh",
        marginTop:"30px",
        borderRadius: "8px",
        border:"1px solid rgba(92,101,117,0.23)",
        boxShadow:"0 0 21px 1px rgba(0,0,0,0.12)",
      };

      const [openModal, setOpenModal] = useState(false);
    
      function onCloseModal() {
        setOpenModal(false);
      }


  return (
    <div className=' flex justify-center mb-6'>
        <div style={containerStyle1} className='p-8'>
            <div className='md:grid grid-cols-2 my-6 gap-12 text-primary'>
                <img src={profilpic} />
                {/* About me */}
                <div
                id='aboutMe'
                className=' mt-14 items- h-28'
                >
                    {aboutMe}
                </div>
                <div>
                    {/* first name */}
                    <div className='mt-6'
                    id='firstName'
                    >{"Name : " + firstName + " " + lastName}</div>

                    {/* Faculty */}
                    <div className='mt-6'
                    id='faculty'
                    >{"Faculty : " +faculty}</div>

                    {/* Country */}
                    <div className='mt-6'
                    id='country'
                    >{"Country : " +country}</div>
                </div>
                <div>
                    {/* city */}
                    <div className='mt-6'
                    id='city'
                    >{"City : "+city}</div>
                    {/* contact number */}
                    <div className='mt-6'
                    id='cotactNumber'
                    >{"Tel : "+contactNum}</div>
                    {/* Graduating/Graduated year */}
                    <div className='mt-6'>
                        {"Graduating/Graduated Year : " + graduatingYear}
                    </div>
                    
                </div>
            </div>

            {/* Job Preferneces */}
            <div className=' mt-12'>
                <h1 className='text-xl font-black'>Job Preferneces</h1>
                {jobPreferences.map((elm)=><Badge className='text-base w-1/2 mt-6 bg-[#F2F5F8] text-secondary text-opacity-80'>{elm}</Badge>)}

                {/* Edit button */}
                <div className=" flex justify-end  ">
                        <button
                        type="button"
                        className=" mt-9 text-xl  text-white text- w-32 h-10 rounded-[5px] bg-[#9445FF]"
                        onClick={() => setOpenModal(true)}
                        >
                        Edit
                        </button>
                </div>
            </div>
        </div>
        {/* popup modal to edit the details */}
        <Modal show={openModal}  onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className='max-h-[60vh] overflow-y-auto max-w-[70vw]'>
          <div className=' flex justify-center mb-6'>
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
                placeholder='About me'
                className=' mt-14 items- h-28'
                />
                <div>
                    {/* first name */}
                    <TextInput className='mt-6'
                    id='firstName'
                    placeholder='First Name'/>

                    {/* second name */}
                    <TextInput className='mt-6'
                    id='lastName'
                    placeholder='Last Name'
                    />

                    {/* Faculty */}
                    <TextInput className='mt-6'
                    id='faculty'
                    placeholder='Faculty'/>

                    {/* Country */}
                    <TextInput className='mt-6'
                    id='country'
                    placeholder='Country'/>
                </div>
                <div>
                    {/* city */}
                    <TextInput className='mt-6'
                    id='city'
                    placeholder='City'/>
                    {/* contact number */}
                    <TextInput className='mt-6'
                    id='cotactNumber'
                    placeholder='Contact Number +94 ...'/>
                    {/* Graduating/Graduated year */}
                    <div className='mt-6 pl-2'>
                        <Label className=' text-secondary text-opacity-80'
                        htmlFor='GradYear'
                        value='Graduating/Graduated Year'/>
                    </div>
                    <Datepicker className='mt-4 text-secondary text-opacity-80'
                    placeholder='Graduating Year'/>
                    
                </div>
            </div>

            {/* Job Preferneces */}
            <div className=' mt-12'>
                <h1 className='text-xl font-black'>Job Preferneces</h1>
                <Badge className='text-base w-1/2 mt-6 bg-[#F2F5F8] text-secondary text-opacity-80'>
                    Java Developer
                </Badge>
                <Badge className='text-base w-1/2 mt-6 bg-[#F2F5F8] text-secondary text-opacity-80'>
                    Back-End Developer
                </Badge>
                <Badge className='text-base w-1/2 mt-6 bg-[#F2F5F8] text-secondary text-opacity-80'>
                    Front-End Developer
                </Badge>

                {/* Finish button */}
                <div className=" flex justify-end  ">
                        <button
                        type="button"
                        className=" mt-9 text-xl  text-white text- w-32 h-10 rounded-[5px] bg-[#9445FF]"
                        >
                        Save
                        </button>
                </div>
            </div>
        </div>
    </div>
            

          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CandidateProfileCard;