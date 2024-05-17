import React, { useState, useRef } from 'react'
import {  useNavigate } from "react-router-dom";
import { Radio, Label, TextInput, Checkbox } from "flowbite-react";
import { toast } from 'sonner';
import { PostJob } from '../firebase/EmployerDB';
import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';

function EmployerJobPostingForm() {
    const [jobTimeType,setJobTimeType] = useState('Full Time');
    const [jobEmployeeType,setJobEmployeeType] = useState("Post Graduate");
    const [remote,setRemote] = useState(false);
    const [experienceLevel,setExperienceLevel] = useState("No Experience");
    const [employeeCapacity,setEmployeeCapacity] = useState("0-10");
    const [loading,setLoading] = useState(false);
    const countryRef = useRef();
    const cityRef = useRef();
    const addressRef = useRef();
    const contactEmailRef = useRef();
    const jobDescriptionRef = useRef();
    const jobResponsibilitesRef = useRef();
    const knowledgeAndExperienceRef = useRef();
    const jobTitleRef = useRef();
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const {currentUserDetail} = useUser();



    function handlePost(){
      setLoading(true);
      if(currentUser && currentUserDetail){

        try{  
          PostJob({
            employerEmail:currentUser.email,
            jobTimeType:jobTimeType,
            jobEmployeeType:jobEmployeeType,
            remote:remote,
            country:countryRef.current.value,
            city:cityRef.current.value,
            address:addressRef.current.value,
            contactEmail:contactEmailRef.current.value,
            jobTitle:jobTitleRef.current.value,
            jobDescription:jobDescriptionRef.current.value,
            jobResponsibilites:jobResponsibilitesRef.current.value,
            knowledgeAndExperience:knowledgeAndExperienceRef.current.value,
            experienceLevel:experienceLevel,
            employeeCapacity:employeeCapacity,
            employerPic:currentUserDetail.profilePic
          });
  
          toast.success('Job Posted Successfully', {
            position: 'top-right',
            style: {
              background: '#4DE318',
              color: '#FFFFFF',
            }});
            navigate('/post-job/e-dashboard-jobs-feed');
        }catch(error){
          console.log(error);
          toast.error('Failed to Post Job', {
            position: 'top-right',
            style: {
              background: '#FF3538',
              color: '#FFFFFF',
            },
          });
        }

      }else{
        toast.warning('Please reload the page and try again', {
          position: 'top-right',
          style: {
            background: '#FFB800',
            color: '#FFFFFF',
          },
        });
      }
      setLoading(false)
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
    <div className='flex justify-center' >
        <div style={containerStyle} className="relative">

        {/* Radio Buttons */}
        <fieldset className="flex  justify-around my-6  ">
            {/* column 1- choose part time or full time*/}
            <div className=''>
                <div className="flex gap-2 items-center my-3">
                    <Radio id="fullTime" value="Full Time" name='jobType1' defaultChecked onChange={(e)=>setJobTimeType(e.target.value)}></Radio>
                    <Label htmlFor="fullTime" className="text-secondary text-opacity-80">Full Time</Label>
                </div>

                <div className="flex gap-2 items-center ">
                    <Radio id="partTime" value="Part Time" name='jobType1' onChange={(e)=>setJobTimeType(e.target.value)}></Radio>
                    <Label htmlFor="partTime" className="text-secondary text-opacity-80">Part Time</Label>
                </div>

            </div>

            {/* column 2-choose internship or post Graduate */}
            <div>

                <div className="flex gap-2 items-center my-3 ">
                    <Radio id="internship" value="Internship" name='jobType2' onChange={(e)=>setJobEmployeeType(e.target.value)}></Radio>
                    <Label htmlFor="internship" className="text-secondary text-opacity-80">Internship</Label>
                </div>

                <div className="flex gap-2 items-center ">
                    <Radio id="postGraduate" value="Post Graduate" name='jobType2' defaultChecked onChange={(e)=>setJobEmployeeType(e.target.value)}></Radio>
                    <Label htmlFor="postGraduate" className="text-secondary text-opacity-80">Post Graduate</Label>
                </div>

            </div>

            <div className="flex gap-2 items-center my-3 ">
                    <Checkbox id="Remote" value="Remote" onChange={()=>setRemote(!remote)} ></Checkbox>
                    <Label htmlFor="Remote" className="text-secondary text-opacity-80">Remote</Label>
            </div>

        </fieldset>

        <div className="md:grid grid-cols-2 ">
          {/* first column */}
          <div>
            <TextInput
              id="country"
              placeholder="Job Offering Country"
              required ={true}
              shadow
              className=" mx-8 mt-6 "
              ref={countryRef}
            />
            <TextInput
              id="Job"
              placeholder="City where job/office is"
              required = {true}
              shadow
              className=" mx-8 mt-6 "
              ref={cityRef}
            />
            <TextInput
            id="address"
            placeholder="Address where the job/office is"
            required = {true}
            shadow
            className=" mx-8 mt-6"
            ref={addressRef}
            />
            <TextInput
              id="email"
              placeholder="Email to Contact"
              type="email"
              required = {true}
              shadow
              className=" mx-8 mt-6 "
              ref={contactEmailRef}
            />
        {/* Experience Level */}
            <div className='mx-8 mt-6'>
                <Label className=' text-secondary text-opacity-80'
                htmlFor='Experience'
                value='Experience Level'/>
            </div>

            <fieldset className="flex  justify-around my-6 mx-8  ">
                {/* column 1*/}
                <div className=''>
                    <div className="flex gap-2 items-center my-3">
                        <Radio id="noExperience" value="No Experience" name='experienceLevel' defaultChecked onChange={(e)=>setExperienceLevel(e.target.value)}></Radio>
                        <Label htmlFor="noExperience" className="text-secondary text-opacity-80" value='No Experience'></Label>
                    </div>

                    <div className="flex gap-2 items-center ">
                        <Radio id="1-3experience" value="1-3 Experience" name='experienceLevel' onChange={(e)=>setExperienceLevel(e.target.value)}></Radio>
                        <Label htmlFor="1-3experience" className="text-secondary text-opacity-80" value='1-3 Experience'></Label>
                    </div>

                    
                    <div className="flex gap-2 items-center my-3 ">
                        <Radio id="1-5experience" value="1-5 Experience" name='experienceLevel' onChange={(e)=>setExperienceLevel(e.target.value)}></Radio>
                        <Label htmlFor="1-5experience" className="text-secondary text-opacity-80" value='1-5 Experience'></Label>
                    </div>

                    <div className="flex gap-2 items-center ">
                        <Radio id="5+experience" value="5+ Experience" name='experienceLevel' onChange={(e)=>setExperienceLevel(e.target.value)}></Radio>
                        <Label htmlFor="5+experience" className="text-secondary text-opacity-80" value='5+ Experience'></Label>
                    </div>

                </div>

            </fieldset>




            {/* Employee Capacity */}
            <div className='mx-8 mt-6'>
                <Label className=' text-secondary text-opacity-80'
                htmlFor='EmployeeCapacity'
                value='Employee Capacity'/>
            </div>

            <fieldset className="flex  justify-around my-6 mx-8  ">
                {/* column 1*/}
                <div className=''>

                    
                <div className="flex gap-2 items-center ">
                        <Radio id="0-10" value="0-10" name='employeeCapacity' defaultChecked onChange={(e)=>{setEmployeeCapacity(e.target.value)}}></Radio>
                        <Label htmlFor="0-10" className="text-secondary text-opacity-80" value='0-10'></Label>
                    </div>

                    <div className="flex gap-2 items-center my-3">
                        <Radio id="10-50" value="10-50" name='employeeCapacity' onChange={(e)=>{setEmployeeCapacity(e.target.value)}}></Radio>
                        <Label htmlFor="10-50" className="text-secondary text-opacity-80" value='10-50'></Label>
                    </div>

                    <div className="flex gap-2 items-center my-3">
                        <Radio id="50-100" value="50-100" name='employeeCapacity' onChange={(e)=>{setEmployeeCapacity(e.target.value)}}></Radio>
                        <Label htmlFor="50-100" className="text-secondary text-opacity-80" value='50-100'></Label>
                    </div>

                    
                    <div className="flex gap-2 items-center my-3 ">
                        <Radio id="100-200" value="100-200" name='employeeCapacity' onChange={(e)=>{setEmployeeCapacity(e.target.value)}}></Radio>
                        <Label htmlFor="100-200" className="text-secondary text-opacity-80" value='100-200'></Label>
                    </div>

                    <div className="flex gap-2 items-center my-3 ">
                        <Radio id="200+" value="200+" name='employeeCapacity' onChange={(e)=>{setEmployeeCapacity(e.target.value)}}></Radio>
                        <Label htmlFor="200+" className="text-secondary text-opacity-80" value='200+'></Label>
                    </div>
                    

                </div>

            </fieldset>

          </div>

          {/* second column */}
          <div>

          <TextInput
              id="jobTitle"
              placeholder="Job Title"
              required = {true}
              shadow
              className=" mx-8 mt-6 "
              ref={jobTitleRef}
            />

            <TextInput
              id="description"
              placeholder="Job Description"
              required = {true}
              shadow
              className=" mx-8 mt-6 "
              ref={jobDescriptionRef}
            />
            <TextInput
              id="Responsibilities"
              placeholder="Job Responsibilities"
              required = {true}
              shadow
              className=" mx-8 mt-6 "
              ref={jobResponsibilitesRef}
            />
            <TextInput
              id="knowledgeAndExperience"
              placeholder="Knowledge and Experience Requirements"
              required
              shadow
              className=" mx-8 mt-6 "
              ref={knowledgeAndExperienceRef}
            />
          </div>
        </div>
        {/* Register Button */}
        <div className="px-8">
            <button
              type="button"
              className=" mt-9 text-2xl text-white text- w-full h-12 rounded-[5px] bg-[#9445FF]"
              onClick={handlePost}
              disabled={loading}
            >
              Post
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

        </div>
      </div>
    </div>
  )
}

export default EmployerJobPostingForm;