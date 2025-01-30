import React, { useState } from 'react'
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { loginStudent } from '../axios/requests';
import { useNavigate } from 'react-router-dom';


const LoginStudent = () => {

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleShowPassClick = () => {
        setShowPassword(!showPassword)
    }


    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const emailOnChange = (e) => {
        setEmail(e.target.value)
    }

    const passwordOnChange = (e) => {
        setPass(e.target.value)
    }

    const doLogin = async () => {
        try {
            console.log(email, pass)
            const data = await loginStudent(email, pass)
            console.log(data.data)
            localStorage.setItem("jwt", data.data)
            navigate("/student-dashboard")
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div className=' w-2/3 mt-4 border border-gray-300 p-3 space-y-5 rounded-md'>
            <h1 className="heading text-center">Student Login</h1>
            <form className='flex flex-col space-y-5'>

                <input
                    type="email"
                    className='h-9 login-input'
                    onChange={(e) => emailOnChange(e)}
                    placeholder='Enter your email id'
                />

                <div className='w-full flex flex-row rounded-md'>

                    <input
                        type={showPassword ? "text" : "password"}
                        className='h-9 login-input w-11/12'
                        onChange={(e) => passwordOnChange(e)}
                        placeholder='Enter your password'
                    />

                    <div className="show-pass-icon w-1/12 bg-white h-9 p-1 flex justify-center items-center ">
                        {showPassword ? <IoMdEyeOff onClick={handleShowPassClick} /> : <FaEye onClick={handleShowPassClick} />}
                    </div>
                </div>

                <div className="flex flex-col">
                    <input
                        type="button"
                        value="Login as a Student"
                        className='login-btn rounded-md'
                        onClick={doLogin}
                    />

                </div>
            </form>
        </div>
    )
}

export default LoginStudent
