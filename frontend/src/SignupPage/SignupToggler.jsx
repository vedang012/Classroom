import React, { useState } from 'react'
import './style/Signup.css'
import SignupForm from './SignupForm.jsx'


const SignupToggler = () => {

    const [SignupType, setSignupType] = useState("student")

    const setStudentSignupType = () => {
        setSignupType("student")
    }

    const setTeacherSignupType = () => {
        setSignupType("teacher")
    }


    return (

        <>
            <div className='container w-2/3 h-10 bg-white flex flex-row justify-center align-middle items-center'>
                <div className="student-btn w-1/2 text-center">
                    <button
                        className={`${SignupType === "student" && "enabled-btn"} Signup-type-btn`}
                        onClick={setStudentSignupType}>
                        Student Signup
                    </button>
                </div>

                <div className="teacher-btn w-1/2 text-center">
                    <button 
                        className={`${SignupType === "teacher" && "enabled-btn"} Signup-type-btn`} 
                        onClick={setTeacherSignupType}>
                        Teacher Signup
                    </button>
                </div>

            </div>

            <div className="Signup-card w-full flex justify-center">
                <SignupForm isTeacher={SignupType === "teacher"} />
            </div>

        </>

    )
}

export default SignupToggler
