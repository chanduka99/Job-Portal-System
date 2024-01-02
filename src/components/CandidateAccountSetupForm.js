import React from 'react';
import { TextInput,Datepicker,Textarea, Label, Badge,Button ,Modal,Checkbox } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import profilpic from '../assets/Registration/profilepic.svg'

function CandidateAccountSetupForm() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
      setOpenModal(false);
      setEmail('');
    }

    const containerStyle = {
        width:"100vh",
        marginTop:"30px",
        borderRadius: "8px",
        border:"1px solid rgba(92,101,117,0.23)",
        boxShadow:"0 0 21px 1px rgba(0,0,0,0.12)",
      };
  return (
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

                {/* Add Button */}
                <div>
                <Button onClick={() => setOpenModal(true)} className='mt-6 text-secondary bg-[#F2F5F8]'>+ Add</Button>
                    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                    <Modal.Header />
                    <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add your Job Prefernece</h3>
                        <div>

                        </div>
                        <div>
                        <TextInput id="jobPreference"   />
                        </div>

                        <div className="w-full">
                        <Button>Add</Button>
                        </div>
                    </div>
                    </Modal.Body>
                </Modal>

                </div>

                {/* Finish button */}
                <div className=" flex justify-end  ">
                    <Link to={"/find-job/get-started/confirm-email/c-account-setup/c-dashboard-jobs-feed"}>
                        <button
                        type="button"
                        className=" mt-9 text-xl  text-white text- w-32 h-10 rounded-[5px] bg-[#9445FF]"
                        >
                        Finish
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CandidateAccountSetupForm