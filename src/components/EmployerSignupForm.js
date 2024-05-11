import React, { useRef,useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Radio, Label, TextInput } from "flowbite-react";
import {useAuth} from '../contexts/AuthContext';
import {toast} from 'sonner';
import { SignUpUserSetup } from '../firebase/EmployerDB';

function EmployerSignupForm() {
  const {SignUp, currentUser} = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const employerStatusRef = useRef('');
  const [employerStatus,setEmployerStatus] = useState('Company');
  const companyNameRef = useRef();
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);

  async function handleRegister(){
    setLoading(true)
    if(passwordRef.current.value != passwordConfirmRef.current.value){
      toast.error('Passwords do not match', {
        position: 'top-right',
        style: {
          background: '#FF3538',
          color: '#FFFFFF',
        },
      });
    }else{
      try{
        await SignUp(emailRef.current.value,passwordRef.current.value);
        //creating a user with employerName,and employerStatus in the users collection
        SignUpUserSetup(emailRef.current.value,companyNameRef.current.value,employerStatus); 
        toast.error('Successfully SignedUp', {
          position: 'top-right',
          style: {
            background: '#4DE318',
            color: '#FFFFFF',
          }});
          navigate("/post-job/get-started/confirm-email",{replaced:true});
      }catch(error){
        toast.error('Error Occured', {
          position: 'top-right',
          style: {
            background: '#FF3538',
            color: '#FFFFFF',
          },
        });
        console.log(error);
      }
    }
    setLoading(false);
  }


  const containerStyle = {
    width: "50vw",
    height: "80vh",
    marginTop: "48px",
    borderRadius: `8px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",

  };
  return (
    <div className="flex justify-center ">
    <div style={containerStyle} className="relative">
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold mt-4 ">SignUp</h1>
      </div>
      {/* Radio Buttons */}
      <fieldset className="flex  justify-around mt-6  ">
        <div className="flex gap-2 items-center ">
          <Radio id="company" value="Company" name='EmployerType' defaultChecked onChange={(e)=>setEmployerStatus(e.target.value)}></Radio>
          <Label htmlFor="company" className="text-secondary text-opacity-80">Company</Label>
        </div>

        <div className="flex gap-2 items-center ">
          <Radio id="singleEmployer" value="Single Employer" name='EmployerType' onChange={(e)=>setEmployerStatus(e.target.value)}></Radio>
          <Label htmlFor="singleEmployer" className="text-secondary text-opacity-80">Single Employer</Label>
        </div>
      </fieldset>

      <div>
        {/* first column */}
        <div>
          <TextInput
            id="companyName"
            placeholder="Company/Employer Name"
            required ={true}
            shadow
            className=" mx-8 mt-6 "
            ref={companyNameRef}
          />

          <TextInput
            id="email"
            placeholder="Email"
            type="email"
            required ={true}
            shadow
            className=" mx-8 mt-6 "
            ref={emailRef}
          />
          <TextInput
            id="setPassword"
            placeholder="Set Password"
            required ={true}
            shadow
            className=" mx-8 mt-6 "
            ref={passwordRef}
          />
          <TextInput
            id="confirmPassword"
            placeholder="Confirm Password"
            required ={true}
            shadow
            className=" mx-8 mt-6 "
            ref={passwordConfirmRef}
          />
        </div>
      </div>
      {/* Register Button */}
      <div className="px-8">
          <button
            type="button"
            className=" mt-9 text-2xl text-white text- w-full h-12 rounded-[5px] bg-[#9445FF]"
            onClick={handleRegister}
            disabled = {loading}
          >
            Register
          </button>
      </div>
      {/* User Agreement */}
      <div className="justify-center text-center px-8 pt-5">
        <p className=" text-secondary text-opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          luctus quam a nisi interdum.
        </p>
      </div>
      {/* Sign in option */}
      <div className="justify-center text-center px-8 py-5">
        <p className=" text-secondary text-opacity-50">
          Have an account? <div className="inline-block"><Link to={"/post-job/Elogin"}><p className="text-[#9445FF]">Sign in</p></Link></div>
        </p>
      </div>
    </div>
  </div>
  )
}

export default EmployerSignupForm;