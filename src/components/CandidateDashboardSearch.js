import { TextInput } from 'flowbite-react';
import React from 'react'

function CandidateDashboardSearch() {
  const containerStyle = {
    width: "full",
    // height: "80vh",
    // marginTop: "30px",
    borderRadius: `8px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.18)",
    padding: `6px`,
    marginLeft:`20px`,
    marginRight:`20px`,
    marginBottom: `8px`,
    display: `flex`
  };
  return (
    <div style={containerStyle} className='justify-around gap-2'>
      <div className='w-[80%]'>
      <TextInput/>
      </div>
      <button
              type="button"
              className=" px-9 py-0.5 text-white  rounded-[5px] bg-[#9445FF]"
            >
              Search
            </button>
    </div>
  )
}

export default CandidateDashboardSearch