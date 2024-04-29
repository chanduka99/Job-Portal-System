import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Radio, Label, TextInput } from "flowbite-react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase/config.js";
import {useAuth} from "../contexts/AuthContext.js";
import {toast} from 'sonner';
import {db} from '../firebase/config';
import { doc, setDoc } from "firebase/firestore"; 

function UndergraduateSignupForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const indedNoRef = useRef();
  const facultyRef = useRef();
  const departmentRef = useRef();
  const [employeeStatus,setEmployeeStatus] = useState("UnderGraduate");
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {SignUp,currentUser} = useAuth();

  async function handleRegister(){
    setLoading(true)
    if(passwordRef.current.value != confirmPasswordRef.current.value){
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
        //creating a users collection and storing info of the signUp
        await setDoc(doc(db, "users", currentUser.email), {
          type:"employee",
          employeeStatus:employeeStatus,
          firstName:firstNameRef.current.value,
          lastName:lastNameRef.current.value,
          indedNo:indedNoRef.current.value,
          faculty:facultyRef.current.value,
          department:departmentRef.current.value,
          appliedJobs:[],
          bookmarkedJobs:[]
        });
        toast.success('Successfully SignedUp', {
          position: 'top-right',
          style: {
            background: '#4DE318',
            color: '#FFFFFF',
          }});
          navigate("/find-job/get-started/confirm-email",{replaced:true});
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
    // height: "80vh",
    marginTop: "30px",
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
            <Radio id="underGraduate" value="UnderGraduate" name="employeeStatus" defaultChecked onChange={(e)=>setEmployeeStatus(e.target.vlaue)}></Radio>
            <Label htmlFor="underGraduate" className="text-secondary text-opacity-80"  >Under Graduate</Label>
          </div>

          <div className="flex gap-2 items-center ">
            <Radio id="postGraduate" value="PostGraduate" name="employeeStatus" onChange={(e)=>setEmployeeStatus(e.target.vlaue)}></Radio>
            <Label htmlFor="postGraduate" className="text-secondary text-opacity-80">Post Graduate</Label>
          </div>
        </fieldset>

        <div className="md:grid grid-cols-2 ">
          {/* first column */}
          <div>
            <TextInput
              id="firstName"
              placeholder="First Name"
              required
              shadow
              className=" mx-8 mt-6 "
              ref={firstNameRef}
            />
            <TextInput
              id="indexNo"
              placeholder="Index No"
              required
              shadow
              className=" mx-8 mt-6 "
              ref ={indedNoRef}
            />
            <TextInput
              id="email"
              placeholder="Email"
              type="email"
              required
              shadow
              className=" mx-8 mt-6 "
              ref={emailRef}
            />
            <TextInput
              id="setPassword"
              placeholder="Set Password"
              type="password"
              required
              shadow
              className=" mx-8 mt-6 "
              ref={passwordRef}
            />
            <TextInput
              id="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              required
              shadow
              className=" mx-8 mt-6 "
              ref={confirmPasswordRef}
            />
          </div>

          {/* second column */}
          <div>
            <TextInput
              id="lasttName"
              placeholder="Last Name"
              required
              shadow
              className=" mx-8 mt-6 "
              ref={lastNameRef}
            />
            <TextInput
              id="faculty"
              placeholder="Faculty"
              required
              shadow
              className=" mx-8 mt-6 "
              ref={facultyRef}
            />
            <TextInput
              id="department"
              placeholder="Department"
              required
              shadow
              className=" mx-8 mt-6 "
              ref={departmentRef}
            />
          </div>
        </div>
        {/* Register Button */}
        <div className="px-8">
          {/* <Link to={"/find-job/get-started/confirm-email"}> */}
            <button
              type="button"
              className=" mt-9 text-2xl text-white text- w-full h-12 rounded-[5px] bg-[#9445FF]"
              onClick={handleRegister}
              disabled = {loading}
            >
              Register
            </button>
          {/* </Link> */}
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
            Have an account? <div className="inline-block"><Link to={"/find-job/Clogin"}><p className="text-[#9445FF]">Sign in</p></Link></div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UndergraduateSignupForm;
