import React from 'react'
import { Link } from "react-router-dom";
import { Radio, Label, TextInput, Checkbox } from "flowbite-react";

function EmployerJobPostingForm() {
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
                    <Radio id="fullTime" value="Full Time"></Radio>
                    <Label htmlFor="fullTime" className="text-secondary text-opacity-80">Full Time</Label>
                </div>

                <div className="flex gap-2 items-center ">
                    <Radio id="partTime" value="Part Time"></Radio>
                    <Label htmlFor="partTime" className="text-secondary text-opacity-80">Part Time</Label>
                </div>

            </div>

            {/* column 2-choose internship or post Graduate */}
            <div>

                <div className="flex gap-2 items-center my-3 ">
                    <Radio id="internship" value="Internship"></Radio>
                    <Label htmlFor="internship" className="text-secondary text-opacity-80">Internship</Label>
                </div>

                <div className="flex gap-2 items-center ">
                    <Radio id="postGraduate" value="Post Graduate"></Radio>
                    <Label htmlFor="postGraduate" className="text-secondary text-opacity-80">Post Graduate</Label>
                </div>

            </div>

            <div className="flex gap-2 items-center my-3 ">
                    <Checkbox id="postGraduate" value="Post Graduate"></Checkbox>
                    <Label htmlFor="postGraduate" className="text-secondary text-opacity-80">Remote</Label>
            </div>

        </fieldset>

        <div className="md:grid grid-cols-2 ">
          {/* first column */}
          <div>
            <TextInput
              id="country"
              placeholder="Country"
              required
              shadow
              className=" mx-8 mt-6 "
            />
            <TextInput
              id="city"
              placeholder="City"
              required
              shadow
              className=" mx-8 mt-6 "
            />
            <TextInput
            id="address"
            placeholder="Address"
            required
            shadow
            className=" mx-8 mt-6"
            />
            <TextInput
              id="email"
              placeholder="Email"
              type="email"
              required
              shadow
              className=" mx-8 mt-6 "
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
                        <Radio id="noExperience" value="No Experience"></Radio>
                        <Label htmlFor="noExperience" className="text-secondary text-opacity-80" value='No Experience'></Label>
                    </div>

                    <div className="flex gap-2 items-center ">
                        <Radio id="1-3experience" value="1-3 Experience"></Radio>
                        <Label htmlFor="1-3experience" className="text-secondary text-opacity-80" value='1-3 Experience'></Label>
                    </div>

                    
                    <div className="flex gap-2 items-center my-3 ">
                        <Radio id="1-5experience" value="1-5 Experience"></Radio>
                        <Label htmlFor="1-5experience" className="text-secondary text-opacity-80" value='1-5 Experience'></Label>
                    </div>

                    <div className="flex gap-2 items-center ">
                        <Radio id="5+experience" value="5+ Experience"></Radio>
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
                        <Radio id="0-10" value="0-10"></Radio>
                        <Label htmlFor="0-10" className="text-secondary text-opacity-80" value='0-10'></Label>
                    </div>

                    <div className="flex gap-2 items-center my-3">
                        <Radio id="10-50" value="10-50"></Radio>
                        <Label htmlFor="10-50" className="text-secondary text-opacity-80" value='10-50'></Label>
                    </div>

                    <div className="flex gap-2 items-center my-3">
                        <Radio id="50-100" value="50-100"></Radio>
                        <Label htmlFor="50-100" className="text-secondary text-opacity-80" value='50-100'></Label>
                    </div>

                    
                    <div className="flex gap-2 items-center my-3 ">
                        <Radio id="100-200" value="100-200"></Radio>
                        <Label htmlFor="100-200" className="text-secondary text-opacity-80" value='100-200'></Label>
                    </div>

                    <div className="flex gap-2 items-center my-3 ">
                        <Radio id="200+" value="200+"></Radio>
                        <Label htmlFor="200+" className="text-secondary text-opacity-80" value='200+'></Label>
                    </div>
                    

                </div>

            </fieldset>

          </div>

          {/* second column */}
          <div>
            <TextInput
              id="description"
              placeholder="Job Description"
              required
              shadow
              className=" mx-8 mt-6 "
            />
            <TextInput
              id="Responsibilities"
              placeholder="Job Responsibilities"
              required
              shadow
              className=" mx-8 mt-6 "
            />
            <TextInput
              id="knowledgeAndExperience"
              placeholder="Knowledge and Experience Requirements"
              required
              shadow
              className=" mx-8 mt-6 "
            />
          </div>
        </div>
        {/* Register Button */}
        <div className="px-8">
          <Link to={"/"}>
            <button
              type="button"
              className=" mt-9 text-2xl text-white text- w-full h-12 rounded-[5px] bg-[#9445FF]"
            >
              Post
            </button>
          </Link>
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

export default EmployerJobPostingForm