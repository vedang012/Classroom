import React, { useState } from 'react'
import './style/Login.css'
import LoginForm from './LoginForm.jsx'


const LoginToggler = () => {

    const [loginType, setLoginType] = useState("student")

    const setStudentLoginType = () => {
        setLoginType("student")
    }

    const setTeacherLoginType = () => {
        setLoginType("teacher")
    }


    return (



        <>
            <div className='container w-2/3 h-10 bg-white flex flex-row justify-center align-middle items-center'>
                <div className="student-btn w-1/2 text-center">
                    <button 
                        className={`${loginType === "student" && "enabled-btn"} login-type-btn`} 
                        onClick={setStudentLoginType}>
                        Student Login
                    </button>
                </div>

                <div className="teacher-btn w-1/2 text-center">
                    <button 
                        className={`${loginType === "teacher" && "enabled-btn"} login-type-btn`} 
                        onClick={setTeacherLoginType}>
                        Teacher Login
                    </button>
                </div>

            </div>

            <div className="login-card w-full flex justify-center">
                
                <LoginForm isTeacher={loginType === "teacher"}/>
                
            </div>

        </>

    )
}

export default LoginToggler
