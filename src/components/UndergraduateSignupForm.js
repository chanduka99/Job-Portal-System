import React from 'react';
import {Radio , Label , TextInput} from 'flowbite-react'



function UndergraduateSignupForm() {
  const containerStyle = {
    width: "60vw",
    height: "80vh",
    marginTop: "48px",
    borderRadius: `8px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",

  };
  return (
    <div className='flex justify-center'>
      <div style={containerStyle} className='relative flex justify-center'>
        <h1 className='text-2xl font-semibold mt-6'>SignUp</h1>
        <div>
          <div>
            <Radio id='underGraduate'></Radio>
            <Label htmlfor='underGraduate'>Under Graduate</Label>
          </div>
aowsghalshgla
          <div>
            <Radio id='underGraduate'></Radio>
            <Label htmlfor='underGraduate'>Post Graduate</Label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UndergraduateSignupForm;