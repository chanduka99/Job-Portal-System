import React from 'react'
import { HiTrash } from "react-icons/hi";

function EmployerDashboardJobApplicationCard(props) {



const containerStyle = {
    // height: "80vh",
    // marginTop: "30px",
    borderRadius: `8px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",
    };

  return (
    <div className=" flex justify-evenly w-min ">
      <div style={containerStyle} className="p-4 lg:w-[20vw] md:w-[35vw] w-[80vw]">
      <div className="flex justify-between place-items-center ">
        <h1 className=' font-semibold'>{props.jobTitle}</h1>
            <button className='text-secondary text-opacity-80 font-medium'>
              <HiTrash />
            </button>
        </div>
        <h1>{props.aplicantEmail}</h1>
        </div>
      </div>
  )
}

export default EmployerDashboardJobApplicationCard;