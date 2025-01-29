import React, { useEffect, useState } from 'react'
import './TeacherDashboard.css'
import ClassCard from './ClassCard'
import Header from "./Header";
import SideBar from "./SideBar";
import bg from '../assets/bg3.jpg';
import { createClass, getCreatedClassroomList } from '../axios/requests';

const TeacherDashboard = () => {

  const [darkMode, setDarkMode] = useState(false)

  const [classes, setClasses] = useState([])

  const [className, setClassName] = useState("")

  useEffect(() => {
    const doReq = async () => {
      try {
        const classData = await getCreatedClassroomList()
        setClasses(classData.reverse())
        console.log(classData)
      } catch (error) {
        console.error(error)
      }
    }

    doReq();
  }, [])


  const darkModeBtnClick = () => {
    setDarkMode(!darkMode)
  }

  const handleClassClick = (id) => {
    window.href.location = `teacher-dashboard/class/${id}`
  }

  const handleNewClassOnChange = (e) => {
    setClassName(e.target.value)
  }

  const generateClassroomId = () => {

    const randomId = Date.now().toString(36).toUpperCase(); // Base-36 for compactness
    return randomId

}

  const createNewClassroom = () => {
    let teacherName;

    do {
        teacherName = prompt("Enter your name: ").trim(); 
    } while (!teacherName)

    createClass(className, teacherName, generateClassroomId())
  }




  return (
    <>
      <div className={`screen h-screen w-screen px-5 ${darkMode && "dark-mode"}`}>

        <Header></Header>

        <div className="content flex flex-row h-full">

          <SideBar></SideBar>



          <div className="dashboard w-full h-full pl-8">


            <div className="join-container flex flex-col my-6">
              <h1 className='text-2xl'>Create a new Class...</h1>
              <div className="join-input-grp flex flex-row space-x-3 mt-3">
                <input type="text" onChange={(e) => handleNewClassOnChange(e)} className='join-input h-10 border p-3 rounded-md w-72' placeholder='Classroom name' />
                <input type="button" onClick={createNewClassroom} className='join-btn h-10 w-20 border rounded-md hover-bgcolor' value="Create" />
              </div>
            </div>

            <div className="border-t h-line border-gray-300"></div>


            <div className="joined-classes-container mt-6">
              <p className='text-2xl'>Your classes: </p>



              <div className="joined-classes grid grid-cols-3 gap-3 mt-2">

                {classes.map((classroom) => (
                    <ClassCard 
                      key={classroom.classroomId} 
                      id={classroom.classroomId} 
                      bgImg={bg} 
                      title={classroom.name} 
                      teacher={classroom.teacherName}
                      onClick={{handleClassClick}} 
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

export default TeacherDashboard
