import React, { useState } from 'react'
import SideBar from '../SideBar'
import Header from '../Header'
import './Class.css'
import Announcement from './Announcement'
import Files from './Files'

const StudentClass = () => {

    const [selectionIndex, setSelectionIndex] = useState(0)

    const handleTabClick = (index) => {
        setSelectionIndex(index)
    }

    return (
        <>
            <div className={`screen h-screen w-screen px-5 `}>
                <Header />
                <div className="content flex flex-row h-full">
                    <SideBar />

                    <div className="class w-full p-5 items-center">
                        <div className="title mb-4 space-y-1 flex flex-row">
                            <div className="flex flex-col w-11/12">
                                <h1 className='text-2xl'>Data Structures and Algorithms</h1>
                                <h3 className='text-base text-gray-700'>- Teacher name</h3>
                            </div>
                            <button className='text-red-700 border border-red-700 px-2 rounded-md h-fit w-fit text-sm hover:bg-red-700 hover:text-white'>
                                Leave class
                            </button>
                        </div>

                        <div className="border-t"></div>

                        <div className="class-content flex flex-row h-full">
                            <div className="left-content border-r h-full p-5">
                                Useful links -
                            </div>

                            <div className="right-content p-5 space-y-5">

                                <div className="tabs flex flex-row space-x-3">
                                    <button 
                                        className={`tab-btn w-full hover-border ${selectionIndex == 0 && 'border rounded-md'}`} 
                                        onClick={() => handleTabClick(0)}>
                                            Announcements
                                        </button>
                                    <button 
                                        className={`tab-btn w-full hover-border ${selectionIndex == 1 && 'border rounded-md'}`} 
                                        onClick={() => handleTabClick(1)}>
                                            Files
                                        </button>
                                    <button 
                                        className={`tab-btn w-full hover-border ${selectionIndex == 2 && 'border rounded-md'}`} 
                                        onClick={() => handleTabClick(2)}>
                                            Live chat
                                        </button>
                                    <button 
                                        className={`tab-btn w-full hover-border ${selectionIndex == 3 && 'border rounded-md'}`} 
                                        onClick={() => handleTabClick(3)}>
                                            People
                                        </button>
                                </div>

                                <div className="card h-full">
                                    {selectionIndex == 0 && <Announcement />}
                                    {selectionIndex == 1 && <Files />}
                                    {selectionIndex == 2 && <p>This feature is coming soon</p>}
                                    {selectionIndex == 3 && <p>This feature is coming soon</p>}


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentClass
