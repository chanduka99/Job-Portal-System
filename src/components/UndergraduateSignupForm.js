import React from "react";
import { Link } from "react-router-dom";
import { Radio, Label, TextInput } from "flowbite-react";

function UndergraduateSignupForm() {
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
        <fieldset className="flex max-w-md justify-around mt-6  ">
          <div className="flex gap-2 items-center ">
            <Radio id="underGraduate" value="Under Graduate"></Radio>
            <Label htmlfor="underGraduate" className="text-secondary text-opacity-80">Under Graduate</Label>
          </div>

          <div className="flex gap-2 items-center ">
            <Radio id="postGraduate" value="Post Graduate"></Radio>
            <Label htmlfor="postGraduate" className="text-secondary text-opacity-80">Post Graduate</Label>
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
            />
            <TextInput
              id="indexNo"
              placeholder="Index No"
              required
              shadow
              className=" mx-8 mt-6 "
            />
            <TextInput
              id="email"
              placeholder="Email"
              type="email"
              required
              shadow
              className=" mx-8 mt-6 "
            />
            <TextInput
              id="setPassword"
              placeholder="Set Password"
              required
              shadow
              className=" mx-8 mt-6 "
            />
            <TextInput
              id="confirmPassword"
              placeholder="Confirm Password"
              required
              shadow
              className=" mx-8 mt-6 "
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
            />
            <TextInput
              id="faculty"
              placeholder="Faculty"
              required
              shadow
              className=" mx-8 mt-6 "
            />
            <TextInput
              id="department"
              placeholder="Department"
              required
              shadow
              className=" mx-8 mt-6 "
            />
          </div>
        </div>
        {/* Register Button */}
        <div className="px-8">
          <Link to={"/find-job/get-started/confirm-email"}>
            <button
              type="button"
              className=" mt-9 text-2xl text-white text- w-full h-12 rounded-[5px] bg-[#9445FF]"
            >
              Register
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
          <p className=" text-secondary text-opacity-50">
            Have an account? <div className="inline-block"><Link><p className="text-[#9445FF]">Sign in</p></Link></div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UndergraduateSignupForm;
