import { TextInput } from 'flowbite-react';
import React from 'react'

function CandidateDashboardSearch() {
  const containerStyle = {
    // height: "80vh",
    // marginTop: "30px",
    borderRadius: `8px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.18)",
    padding: `6px`,
  };
  return (
    <div className='hidden lg:block w-full'>
      <div style={containerStyle} className='justify-around gap-2 flex w-full'>
        <div className='w-[90%]'>
        <TextInput/>
        </div>
        <button
                type="button"
                className=" px-9 py-0.5 text-white  rounded-[5px] bg-[#9445FF]"
              >
                Search
              </button>
      </div>
    </div>
  )
}

export default CandidateDashboardSearch