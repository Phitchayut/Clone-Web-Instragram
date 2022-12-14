import React from 'react'
import {FaEllipsisH} from 'react-icons/fa'
import {motion} from 'framer-motion'

const profilePic = 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

const UserInfo = () => {
  return (
    <div className='mt-5 flex lg:flex-row md:flex-row flex-col lg:h-44 md:h-44 h-auto items-center'>
        <div className="profile-pic flex-1 flex justify-center">
            <motion.img 
            whileHover={{scale:1.1}}
            className='w-[150px] h-[150px] rounded-full object-cover cursor-pointer' src={profilePic} alt="my profile pic" />
        </div>


        <div className="profile-info flex-1 lg:flex lg:flex-col lg:justify-center space-y-3">
            <div className="info-t flex items-center space-x-5 justify-center lg:justify-start md:justify-start">
                <h2 className='text-[28px]'>Phitchayut</h2>
                <a href="#" className='bg-cyan-500 hover:bg-cyan-400 px-5 rounded text-white'>Follow</a>
                <a href="#">
                    <FaEllipsisH />
                </a>
            </div>
            <div className="info-m flex items-center space-x-5 justify-center lg:justify-start md:justify-start">
                <p><strong>1.258</strong> posts</p>
                <p><strong>4M</strong> followers</p>
                <p><strong>0</strong> following</p>
            </div>
            <div className="info-b font-bold flex items-center justify-center lg:justify-start md:justify-start">
                <p>Phitchayut Chanpherng</p>
            </div>
        </div>

      
    </div>
  )
}

export default UserInfo