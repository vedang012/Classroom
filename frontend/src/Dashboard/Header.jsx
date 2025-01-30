import React, { useContext } from 'react'
import { CgDarkMode } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { isDarkMode } from '../context/context';


const Header = ({isTeacher}) => {

    const value = useContext(isDarkMode)
    const setDarkTheme = () => {
        value.setDarkMode(!value.darkMode)
        localStorage.setItem('dark', value.darkMode)
    }

    return (
        <div className="header flex flex-row border-b-2 justify-center">

            <div className="greet w-2/3 flex items-center space-x-5">
                <IoMdMenu className='size-7'/>
                <h1 className='text-3xl font-normal'>Hello, {isTeacher ? "Teacher" : "Student"}!</h1>
            </div>


            <div className="menu w-full flex flex-row items-center justify-around">
                <button className='hover-color'>Home</button>
                <button className='hover-color'>Calender</button>
                {!isTeacher && <button className='hover-color'>To Do</button>}
                <button className='hover-color'>Settings</button>
                <CgDarkMode onClick={setDarkTheme} className='size-7 hover:cursor-pointer' />
                <div className="profile-icon hover:cursor-pointer">
                </div>
            </div>

        </div>
    )
}

export default Header
