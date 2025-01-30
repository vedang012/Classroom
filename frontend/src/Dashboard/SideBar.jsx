import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { SlCalender } from "react-icons/sl";
import { LuListTodo } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { IoArchiveOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { SlHome } from "react-icons/sl";
import Modal from '../todo/Modal/Modal';


const SideBar = () => {


    return (
        <div className="sidebar w-72 border-r-2 flex flex-col">
            <div className="menu w-full flex flex-col  space-y-5 mt-3 pr-3">
                <button className='text-left hover-color flex flex-row items-center'><SlHome className='mr-3'/> Home</button>
                <button className='text-left hover-color flex flex-row items-center'> <SlCalender className='mr-3'/> Calender</button>


                <div className="border-t h-line border-gray-300"></div>

                <button className='text-left hover-color flex flex-row items-center'> <IoArchiveOutline className='mr-3'/>Archieved Classes</button>
                <button className='text-left hover-color flex flex-row items-center'><CiUser className='mr-3'/> Profile</button>
                <button className='text-left hover-color flex flex-row items-center'><CiSettings className="mr-3"/> Settings</button>

                <div className="border-t h-line border-gray-300"></div>

                <button className='text-left hover-color flex flex-row items-center'><IoIosHelpCircleOutline className='mr-3'/> Help & Support</button>
                <button className='text-left hover-color flex flex-row items-center'><VscFeedback className='mr-3'/> Give Feedback</button>




            </div>
        </div>
    )
}

export default SideBar
