import React from 'react';
import {Radio,Label,TextInput} from 'flowbite-react';
import {Link} from 'react-router-dom';

function CandidateSignInForm() {
  const containerStyle = {
    width: "30vw",
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
          <h1 className="text-2xl font-semibold mt-4 ">Sign in</h1>
        </div>
        {/* Radio Buttons */}
        <fieldset className="flex  justify-around mt-6  ">
          <div className="flex gap-2 items-center ">
            <Radio id="underGraduate" value="Under Graduate"></Radio>
            <Label htmlfor="underGraduate" className="text-secondary text-opacity-80">Under Graduate</Label>
          </div>

          <div className="flex gap-2 items-center ">
            <Radio id="postGraduate" value="Post Graduate"></Radio>
            <Label htmlfor="postGraduate" className="text-secondary text-opacity-80">Post Graduate</Label>
          </div>
        </fieldset>

        <div >
          <div >
            {/* Email and Password */}
            <TextInput
              id="email"
              placeholder="Email"
              type="email"
              required
              shadow
              className=" mx-8 mt-12 "
            />
           
            <TextInput
              id="password"
              placeholder="Password"
              type='password'
              required
              shadow
              className=" mx-8 mt-12 "
            />
          </div>
        </div>
        {/* Register Button */}
        <div className="px-8">
          <Link to={"/find-job/c-dashboard-jobs-feed"}>
            <button
              type="button"
              className=" mt-9 text-2xl text-white text- w-full h-12 rounded-[5px] bg-[#9445FF]"
            >
              Sign in
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
          <div className=" text-secondary text-opacity-50">
            No account? <div className="inline-block"><Link to={"/find-job/get-started"}><p className="text-[#9445FF]">Sign up</p></Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateSignInForm