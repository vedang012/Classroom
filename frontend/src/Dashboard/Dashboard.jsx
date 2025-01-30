import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import ClassCard from './ClassCard'
import Header from "./Header";
import SideBar from "./SideBar";
import bg from '../assets/bg3.jpg';
import { createClass, getCreatedClassroomList, getJoinedClassroomList } from '../axios/requests';

const TeacherDashboard = ({isTeacher}) => {

  const [darkMode, setDarkMode] = useState(false)

  const [classes, setClasses] = useState([])

  const [className, setClassName] = useState("")

  const [classroomId, setClassroomId] = useState("")
  

  useEffect(() => {
    const doReq = async () => {
      try {
        const classData = isTeacher ? await getCreatedClassroomList() : await getJoinedClassroomList()
        console.log(classData);
        
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


  const handleNewClassOnChange = (e) => {
    isTeacher ? setClassName(e.target.value) : setClassroomId(e.target.value)
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

        <Header isTeacher = {isTeacher}></Header>

        <div className="content flex flex-row h-full">

          <SideBar></SideBar>



          <div className="dashboard w-full h-full pl-8">


            <div className="join-container flex flex-col my-6">
              <h1 className='text-2xl'>
                {isTeacher ?  <p>Create a new Class...</p> : <p>Join a class and Get Started...</p>}
              </h1>
              <div className="join-input-grp flex flex-row space-x-3 mt-3">
                <input type="text" onChange={(e) => handleNewClassOnChange(e)} className='join-input h-10 border p-3 rounded-md w-72' placeholder={isTeacher ? "Classroom Name" : "Classroom Id"} />
                <input type="button" onClick={isTeacher ? createNewClassroom : joinClassroom} className='join-btn h-10 w-20 border rounded-md hover-bgcolor' value={isTeacher ? "Create" : "Join"} />
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
                      isTeacher ={isTeacher}
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

export default TeacherDashboard
