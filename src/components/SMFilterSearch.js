import React from 'react'
import { FaFilter,FaSearch } from "react-icons/fa";
import { TextInput } from 'flowbite-react';
function SMFilterSearch() {



const outlineStyle = {
    focus:{
        outline:"none"    
    }
}
const containerStyle = {
    // height: "80vh",
    margin: "5px",
    borderRadius: `8px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",
    };
  return (
    
        <div className='flex p-3 gap-5 place-items-center sm:justify-between md:w-[88vw] lg:hidden ' style={containerStyle}>
            <div className='flex gap-5'>
                <div className="hover:text-[#9345ffd5]">
                    <button>
                        <FaFilter className=" pl-1 text-[3vh] text-[#9345ffd5] "/>
                    </button>
                </div>
                <div className='bg-[#434955] w-[0.5px] opacity-60'/>
            </div>
            <div className="flex gap-2 justify-between place-items-center  hover:text-[#9345ffd5]">
            {/* <input type='text' className='border-l-0 border-r-0 border-t-0 border-[#434955] opacity-50 ' style={outlineStyle.focus} /> */}
            <div className='w-[50vw] sm:w-[70vw] overflow-auto'>
                <TextInput className='w-full overflow-hidden' style={outlineStyle.focus}/>
            </div>
            <button>
                <FaSearch className="text-[3vh] text-[#9345ffd5] "/>
            </button>
            </div>
        </div>
  )
}

export default SMFilterSearch