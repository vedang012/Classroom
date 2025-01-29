import React, { useEffect, useState } from 'react'
import './StudentDashboard.css'
import ClassCard from './ClassCard'
import Header from "./Header";
import SideBar from "./SideBar";

import bg from '../assets/bg3.jpg';
import { getJoinedClassroomList, joinClass } from '../axios/requests';

const StudentDashboard = () => {



  const [darkMode, setDarkMode] = useState(false)

  const [classes, setClasses] = useState([])

  const [classroomId, setClassroomId] = useState("")


  useEffect(() => {
    const doReq = async () => {
      try {
        const classData = await getJoinedClassroomList()
        setClasses(classData.reverse())
        console.log(classData)
      } catch (error) {
        console.error(error)
      }
    }

    doReq();
  }, [])


  const randomIndex = () => {
    return Math.floor(Math.random() * bgImages.length)
  }

  const darkModeBtnClick = () => {
    setDarkMode(!darkMode)
  }


  const handleJoinInputChange = (e) => {
    console.log(e.target.value);
    
    setClassroomId(e.target.value)
  }

  const joinClassroom = async () => {
    if(classroomId) {
      try {
        await joinClass(classroomId)
      } catch (error) {
        console.error(error)
        window.alert("Please enter the correct classroom id")
      }
    } else {
      alert("Please enter the correct classrom id")
    }
  } 



  return (
    <>
      <div className={`screen h-screen w-screen px-5 ${darkMode && "dark-mode"}`}>

        <Header></Header>

        <div className="content flex flex-row h-full">

          <SideBar></SideBar>



          <div className="dashboard w-full h-full pl-8">


            <div className="join-container flex flex-col my-6">
              <h1 className='text-2xl'>Join a class and Get Started...</h1>
              <div className="join-input-grp flex flex-row space-x-3 mt-3">
                <input type="text" onChange={(e) => handleJoinInputChange(e)} className='join-input h-10 border p-3 rounded-md w-72' placeholder='Classroom id' />
                <input type="button" onClick={joinClassroom} className='join-btn h-10 w-20 border rounded-md hover-bgcolor' value="Join" />
              </div>
            </div>

            <div className="border-t h-line border-gray-300"></div>


            <div className="joined-classes-container mt-6">
              <p className='text-2xl'>Enrolled classes: </p>

              <div className="joined-classes grid grid-cols-3 gap-3 mt-2">

              {classes.map((classroom) => (
                    <ClassCard 
                      key={classroom.classroomId} 
                      id={classroom.classroomId} 
                      bgImg={bg} 
                      title={classroom.name} 
                      teacher={classroom.teacherName}
                    />
                )) }

              </div>
            </div>

          </div>
        </div>



      </div>

    </>
  )
}

export default StudentDashboard
