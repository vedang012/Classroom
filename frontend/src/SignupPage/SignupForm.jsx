import React, { useState } from 'react'
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { registerStudent, registerTeacher } from '../axios/requests';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({isTeacher}) => {
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleShowPassClick = () => {
        setShowPassword(!showPassword)
    }

        const[email, setEmail] = useState("")
        const[pass, setPass] = useState("")
    
        const doSignup = async () => {
            try {
                const data = isTeacher ? await registerTeacher(email, pass) : await registerStudent(email, pass)
                console.log("signup successful")
                navigate("/login")
            } catch (error) {
                alert(error.message)
            }
        }
    
        const emailOnChange = (e) => {
            setEmail(e.target.value)
        }
    
        const passwordOnChange = (e) => {
            setPass(e.target.value)
        }

    return (
        <div className=' w-2/3 mt-4 border border-gray-300 p-3 space-y-5 rounded-md'>
            <h1 className="heading text-center">{isTeacher ? "Teacher Signup" : "Student Signup"}</h1>
            <form className='flex flex-col space-y-5'>
                <input type="email" className='h-9 Signup-input' onChange={(e) => emailOnChange(e)} placeholder='Enter your email id' />

                <div className='w-full flex flex-row rounded-md'>
                    <input type={showPassword ? "text" : "password"} onChange={(e) => passwordOnChange(e)} className='h-9 Signup-input w-11/12' placeholder='Enter your password' />
                    <div className="show-pass-icon w-1/12 bg-white h-9 p-1 flex justify-center items-center ">
                        {showPassword ? <IoMdEyeOff onClick={handleShowPassClick} /> : <FaEye onClick={handleShowPassClick} />}
                    </div>
                </div>

                <div className='w-full flex flex-row rounded-md'>
                    <input type={showPassword ? "text" : "password"} className='h-9 Signup-input w-11/12' placeholder='Confirm password' />
                    <div className="show-pass-icon w-1/12 bg-white h-9 p-1 flex justify-center items-center ">
                        {showPassword ? <IoMdEyeOff onClick={handleShowPassClick} /> : <FaEye onClick={handleShowPassClick} />}
                    </div>
                </div>

                <div className='space-x-3'>
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">I agree to the all terms and conditions</label>
                </div>



                <div className="flex flex-col">
                    <input 
                        type="button" 
                        value={`Signup as a ${isTeacher ? "Teacher" : "Student"}`} 
                        onClick={doSignup} 
                        className='Signup-btn rounded-md' 
                    />
                </div>
            </form>
        </div>
    )

}

export default SignupForm
