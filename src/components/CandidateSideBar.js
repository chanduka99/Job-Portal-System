import React from 'react'
import { Link } from 'react-router-dom';
import profile from '../assets/candidate/sidebar/profile.svg';
import search from '../assets/candidate/sidebar/search.svg';
import bookmark from '../assets/candidate/sidebar/Bookmard icon gray.svg'

function CandidateSideBar() {
  return (
    <div className='my-1'>
        <div className='bg-[#9445FF] w-[8vh] h-[94vh] rounded-[5px] relative'>
            {/* profile */}
            <div>
                <Link>
                    <img src={profile} alt='profile'/>
                </Link>
            </div>
            {/* jobsfeed */}
            <div>
                <Link>
                    <img src='' alt='jobfeed'/>
                </Link>
            </div>
            {/* bookmarks */}
            <div>
                <Link>
                    <img src='' alt='bookmarks'/>
                </Link>
            </div>
            {/* chat */}
            <div>
                <Link>
                    <img src='' alt='chat'/>
                </Link>
            </div>
            {/* reviews/blog */}
            <div>
                <Link>
                    <img src='' alt='reviews'/>
                </Link>
            </div>
            {/* settings */}
            <div>
                <Link>
                    <img src='' alt='settings'/>
                </Link>
            </div>

            <div className='absolute bottom-4'>
                <Link>
                    <img src='' alt='log out'/>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default CandidateSideBar