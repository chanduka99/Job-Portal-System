import React from 'react';
import { TextInput,Textarea, Modal,Spinner} from 'flowbite-react';
import { useState, useRef,useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import profilpic from '../assets/Registration/profilepic.svg'
import {db} from '../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';
import { toast } from 'sonner';
import { delay, motion } from "framer-motion";
import { RxAvatar } from "react-icons/rx";
import { UploadProfileImg } from "../firebase/EmployerDB";

function EmployerAccountSetupForm() {
    const [openModal, setOpenModal] = useState(false);
    const [loading,setLoading] = useState(false);
    const [imgUploadLoading,setImgUploadLoading] = useState(false);
    const [imgUpload,setImgUpload] = useState(null);
    const aboutMeRef = useRef('');
    const companyNameRef = useRef('');
    const cordinatorRef = useRef('');
    const countryRef = useRef('');
    const cityRef = useRef('');
    const websiteUrlRef = useRef('');
    const contactNumberRef = useRef('');
    const {currentUser} = useAuth();
    const {currentUserDetail} = useUser();
    const navigate = useNavigate();


    useEffect(()=>{
      if(currentUser && currentUserDetail){
          setImgUpload(currentUserDetail.profilpic);
      }

  },[currentUser,currentUserDetail])

    function onCloseModal() {
        setOpenModal(false);
      }

    async function handleSet(){
        setImgUploadLoading(true)
        // upload the image to the db
        try{
           //check if a img is selected
      if(imgUpload == null){
        toast.error("Please select your image", {
          position: "top-right",
          style: {
            background: "#FF3538",
            color: "#FFFFFF",
          },
        });
        return;
      }
      if(imgUpload.size/1024 >= 1024*5){
        toast.error('file too large', {
          position: 'top-right',
          style: {
            background: '#FF3538',
            color: '#FFFFFF',
          },
        });
      }else{
        //upload image function call
        
        await UploadProfileImg(currentUser.email,imgUpload).then((imgUrl)=>{
            setImgUpload(imgUrl);
            console.log(imgUrl);
        });
        toast.promise(UploadProfileImg, {
            loading: 'This may take a few seconds, please wait',
            success: "Successfull",
            position: 'top-right',
            style : {
                // background: ""
                color :'#4DE318'
            }
            
        })
    }
    onCloseModal();
    } catch (error) {
      console.log(error);
      toast.error(`${error.code}`, {
        position: "top-right",
        style: {
          background: "#FF3538",
          color: "#FFFFFF",
        },
      });
    }finally{
        setImgUploadLoading(false);
    }
    }
    
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
                window.location.reload(true);
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

    const profilePicConatinerStyle = {
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

    // container style for the job apply popup
  const containerStyle4 = {
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
                </p>
            </div>
            <div className='md:grid grid-cols-2 my-6 gap-12'>
              {/* profile pictrue */}
                    <motion.button className='w-[20vh] h-[20vh]  rounded-full mt-[4vh] flex justify-center place-items-center' style={profilePicConatinerStyle}
                        onClick={()=>setOpenModal(true)}
                        whileHover={{scale:1.1}}
                    >   
                        {!imgUpload &&   (<RxAvatar className='text-9xl text-lightSecondary opacity-30' />)}
                        {/* set loading image for profilpic */}
                        {imgUploadLoading && imgUpload && (<Spinner className='fill-[white] text-[#9345ffd5]'/>)}
                        {!imgUploadLoading && (<img className='max-W-[17vh] max-h-[17vh]' src={imgUpload}/>)}
                    </motion.button>



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


        {/* modal for uploading the image */}
        <Modal show={openModal} onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="max-h-[60vh] overflow-y-auto max-w-[70vw]">
            <div className=" flex justify-center mb-6">
              <div style={containerStyle4} className="p-8">
                <h1 className='text-secondary'>Choose your profile picture</h1>
                <div className=" mt-12">
                <input type="file" className="bg-[#9445FF] text-white" onChange={(event)=>setImgUpload(event.target.files[0])} />
                  <label className=" text-secondary text-opacity-80 ">   Max size 5 MB</label>

                  {/* Set button */}
                  <div className=" flex justify-end  ">
                    <button
                      type="button"
                      className=" mt-9 text-xl  text-white text- w-32 h-10 rounded-[5px] bg-[#9445FF]"
                    //   onClick={()=>setOpenModal(false)}
                      onClick={handleSet}
                      disabled= {loading}
                    >
                      Set
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

export default EmployerAccountSetupForm