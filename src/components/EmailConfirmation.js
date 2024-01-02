import React from "react";
import { Link } from "react-router-dom";
import { Radio, Label, TextInput } from "flowbite-react";
import EmailConfirm from '../assets/Registration/EmailConfirmCircle.svg'

function EmailConfirmation() {
  const containerStyle = {
    width: "60vw",
    // height: "80vh",
    marginTop: "30px",
    borderRadius: `8px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",
  };
  return (
    <div className="flex justify-around mt-32 ">



      {/* only for testing remember to  remove this after writing the logice */}
      <Link to={"/find-job/get-started/confirm-email/c-account-setup"}>
      <div style={containerStyle} className="p-2 relative">
        <img src={EmailConfirm} className="absolute  w-32  -top-16 inset-x-28 m-auto " alt="No internet"/>

        <div className="p-8">
          <h1 className="text-2xl font-black my-6">Confirm Your E-mail</h1>
          <p className="text-secondary text-opacity-80">
            Click on the confirmatioin link we sent to your account to confirm
            your reistration
          </p>
        </div>
        <div className=" bg-[#F2F5F8] rounded-[8px] flex justify-between p-6 text-sm">
          <p className=" text-secondary text-opacity-60">
            Didn't get the email?
            <Link to={"/find-job"}>
              <div className="inline-block text-[#9445FF]">
                <p>Email link again</p>
              </div>
            </Link>
          </p>
          <div>
            <Link to={"/find-job"}>
              <p className="text-[#9445FF]">Return to Home</p>
            </Link>
          </div>
        </div>
      </div>

      </Link>


      {/* <div style={containerStyle} className="p-2 relative">
        <img src={EmailConfirm} className="absolute  w-32  -top-16 inset-x-28 m-auto " alt="No internet"/>

        <div className="p-8">
          <h1 className="text-2xl font-black my-6">Confirm Your E-mail</h1>
          <p className="text-secondary text-opacity-80">
            Click on the confirmatioin link we sent to your account to confirm
            your reistration
          </p>
        </div>
        <div className=" bg-[#F2F5F8] rounded-[8px] flex justify-between p-6 text-sm">
          <p className=" text-secondary text-opacity-60">
            Didn't get the email?
            <Link to={"/find-job"}>
              <div className="inline-block text-[#9445FF]">
                <p>Email link again</p>
              </div>
            </Link>
          </p>
          <div>
            <Link to={"/find-job"}>
              <p className="text-[#9445FF]">Return to Home</p>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default EmailConfirmation;
