import React ,{ useState, useRef,useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { TextInput,Datepicker,Textarea, Label, Badge,Button ,Modal,Spinner } from 'flowbite-react';
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../firebase/config';
import { Link } from 'react-router-dom';
import profilpic from '../assets/Registration/profilepic.svg';
import { toast } from 'sonner';
import { useUser } from '../contexts/UserContext';
import { UploadProfileImg } from "../firebase/EmployerDB";
import { delay, motion } from "framer-motion";
import { RxAvatar } from "react-icons/rx";

function CandidateAccountSetupForm() {
    const [openModal, setOpenModal] = useState(false);
    const [openImgModal, setOpenImgModal] = useState(false);
    const [loading,setLoading] = useState(false);
    const [imgUploadLoading,setImgUploadLoading] = useState(false);
    const [imgUpload,setImgUpload] = useState(null);
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const countryRef = useRef('');
    const cityRef = useRef('');
    const contactNoRef = useRef('');
    const aboutMeRef = useRef('');
    let gradDate = '';


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
        toast.promise(UploadProfileImg, {
            loading: 'This may take a few seconds, please wait',
            success: "Successfull",
            position: 'top-right',          
        })
        try{
           //check if a cv is selected
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
        toast.success('Profil picture set successfully', {
            position: 'top-right',
            style: {
              background: '#4DE318',
              color: '#FFFFFF',
            }});
    }
    setOpenImgModal(false);
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
                firstName:firstNameRef.current.value,
                lastName:lastNameRef.current.value,
                country:countryRef.current.value,
                city:cityRef.current.value,
                contactNo:contactNoRef.current.value,
                gradDate:gradDate
            });
              toast.success('Details Added Successfully', {
                position: 'top-right',
                style: {
                  background: '#4DE318',
                  color: '#FFFFFF',
                }});
                navigate('/post-job/get-started/confirm-email/e-account-setup/e-dashboard-jobs-feed');
        }catch(error){
            toast.error(`Error,try again`, {
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

      const profilePicConatinerStyle = {
        border:"1px solid rgba(92,101,117,0.23)",
        boxShadow:"0 0 21px 1px rgba(0,0,0,0.12)",
      };

    // container style for the  popup
    const containerStyle4 = {
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
                    {/* <br/>Data entered here will be used to find job recommendations for you. */}
                </p>
            </div>
            <div className='md:grid grid-cols-2 my-6 gap-12'>

              {/* profile pictrue */}
              <motion.button className='w-[20vh] h-[20vh]  rounded-full mt-[4vh] flex justify-center place-items-center' style={profilePicConatinerStyle}
                        onClick={()=>setOpenImgModal(true)}
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
                placeholder='About me'
                ref={aboutMeRef}
                className=' mt-14 items- h-28'
                />
                <div>
                    {/* first name */}
                    <TextInput className='mt-6'
                    id='firstName'
                    placeholder='First Name'
                    ref={firstNameRef}
                    />

                    {/* second name */}
                    <TextInput className='mt-6'
                    id='lastName'
                    placeholder='Last Name'
                    ref={lastNameRef}
                    />

                    {/* Country */}
                    <TextInput className='mt-6'
                    id='country'
                    placeholder='Country'
                    ref={countryRef}
                    />
                </div>
                <div>
                    {/* city */}
                    <TextInput className='mt-6'
                    id='city'
                    placeholder='City'
                    ref={cityRef}
                    />
                    {/* contact number */}
                    <TextInput className='mt-6'
                    id='cotactNumber'
                    placeholder='Contact Number +94 ...'
                    ref={contactNoRef}
                    />
                    {/* Graduating/Graduated year */}
                    <div className='mt-6 pl-2'>
                        <Label className=' text-secondary text-opacity-80'
                        htmlFor='GradYear'
                        value='Graduating/Graduated Year'/>
                    </div>
                    <Datepicker className='mt-4 text-secondary text-opacity-80'
                    placeholder='Graduating Year'
                    onSelectedDateChanged={(date)=>{
                        gradDate=date;
                    }}
                    />
                    
                </div>
            </div>

            {/* Skills */}
            <h1 className='text-xl font-black mt-12'>Skills</h1>
            <div className='max-h-[25vh] overflow-auto'>
                <Badge className='text-base w-1/3 mt-6 bg-[#F2F5F8] text-secondary text-opacity-80'>
                    Backend Developer
                </Badge>
                <Badge className='text-base w-1/3 mt-6 bg-[#F2F5F8] text-secondary text-opacity-80'>
                    Mobile app Development
                </Badge>
                <Badge className='text-base w-1/3 mt-6 bg-[#F2F5F8] text-secondary text-opacity-80'>
                    Web Developer
                </Badge>
            </div>
            <div className='mt-5'>
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
                        <button
                        type="button"
                        className=" mt-9 text-xl  text-white text- w-32 h-10 rounded-[5px] bg-[#9445FF]"
                        onClick={handleFinish}
                        >
                        Finish
                        </button>
                </div>
            </div>
        </div>

         {/* modal for uploading the image */}
         <Modal show={openImgModal} popup>
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

export default CandidateAccountSetupForm