import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../assets/candidate/sidebar/profile.svg';
import search from '../assets/candidate/sidebar/search.svg';
import bookmark from '../assets/candidate/sidebar/Bookmard icon gray.svg';
import chat from '../assets/candidate/sidebar/chat.svg';
import review from '../assets/candidate/sidebar/review.svg';
import settings from '../assets/candidate/sidebar/settings.svg';
import menuBar from '../assets/candidate/sidebar/menubar.svg';
import logout from '../assets/candidate/sidebar/logout.svg';
import {auth} from "../firebase/config";
import { signOut } from 'firebase/auth';

function CandidateSideBar() {
    const containerStyle = "p-2 rounded-[5px] mt-[4vh] flex place-items-center gap-5 hover:bg-[rgba(255,255,255,0.18)] duration-300  text-white text-opacity-60 text-base tracking-wider hover:text-white"
    const [pressed, setPressed] = useState(false);
    const navigate = useNavigate();
    
    const logOut = async()=>{
        try{
            await signOut(auth);
            navigate("/find-job")
        }catch(error){
            console.log(error);
            navigate("/find-job")
        }
    }

  return (
    <div className='my-1'>
        <div className={`relative bg-gradient-to-b from-[#9345ffd5] to-[#512194] ${pressed? 'w-[26vh]': 'w-[9vh]'}  h-[92.5vh] rounded-[5px] p-2 duration-300`}>
            <div className={`p-2 rounded-[5px]  mt-1 w-12 gap-5 hover:bg-[rgba(255,255,255,0.18)] duration-300 `}>
                <div className='w-7 h-7 justify-around'>
                    <button onClick={()=>setPressed(!pressed)}>
                        <img src={menuBar} alt='menu bar'/>
                    </button>
                </div>
            </div>
            {/* profile */}
            <div>
            <Link to={"/find-job/c-dashboard-profile"}>
                <div className= {`${containerStyle}`}>
                    <div className='w-8'>
                        <img id='profile' className= ' hover:fill-white' src={profile} alt='profile'/>
                    </div>
                    <h1 className={`${pressed? 'block':'hidden'}`}>Profile</h1>
                </div>
            </Link>
            </div>
            {/* jobsfeed */}
            <div  >
                <Link to={"/find-job/c-dashboard-jobs-feed"}>
                <div className={`${containerStyle}`}>
                <div className='w-8'>
                    <img src={search} alt='jobfeed'/>
                </div>
                <h1 className={`${pressed? 'block':'hidden'}`}>Job Feed</h1>
                </div>
                </Link>
            </div>
            {/* bookmarks */}
            <div>
                <Link to={"/find-job/c-dashboard-bookmarks"}>
                <div className={`${containerStyle}`}>
                    <div className='w-8'>
                    <img src={bookmark} alt='bookmarks'/>
                </div>
                <h1 className={`${pressed? 'block':'hidden'}`}>Bookmarks</h1>
                </div>
                </Link>
            </div>
            {/* chat */}
            <div>
                <Link to={"/find-job/c-dashboard-chat"}>
                <div className={`${containerStyle}`}>
                    <div className='w-8'>
                    <img src={chat} alt='chat'/>
                </div>
                <h1 className={`${pressed? 'block':'hidden'}`}>Chat</h1>
                </div>
                </Link>
            </div>
            {/* reviews/blog */}
            <div>
                <Link to={"/find-job/c-dashboard-reviews"}>
                <div className={`${containerStyle}`}>
                    <div className='w-8'>
                    <img src={review} alt='reviews'/>
                </div>
                <h1 className={`${pressed? 'block':'hidden'}`}>Reviews</h1>
                </div>
                </Link>
            </div>
            {/* settings */}
            <div>
                <Link to={"/find-job/c-dashboard-settings"}>
                <div className={`${containerStyle}`}>
                    <div className='w-8'>
                    <img src={settings} alt='settings'/>
                    </div>
                    <h1 className={`${pressed? 'block':'hidden'}`}>Settings</h1>
                </div>
                </Link>
            </div>

            <div className='absolute bottom-4'>
                {/* <Link to={"/find-job"}> */}
                    <button onClick={logOut}>
                        <div className={`${containerStyle}`}>
                        <div className='w-8'>
                            <img src={logout} alt='log out'/>
                        </div>
                            <h1 className={`${pressed? 'block':'hidden'}`}>Logout</h1>
                        </div>
                    </button>
                {/* </Link> */}
            </div>
        </div>
    </div>
  )
}

export default CandidateSideBar