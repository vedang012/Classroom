import React from 'react'
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { useLocation } from 'react-router-dom';

const Files = () => {

    const location = useLocation()

    const {isTeacher} = location.state || {}
    return (
        <div className='content-card space-y-3'>

        {/* New file upload card. Rendered only for teachers */}

            {isTeacher && <div className="announcement-card p-3 w-full h-auto border rounded-md flex flex-col space-y-2">
                <div className='flex flex-row items-end space-x-2'>
                    <p> Upload a new file </p>
                </div>
                <select className='w-1/4 border h-8' name="filetags" id="filetags">
                    <option value="Assignment">Assignment</option>
                    <option value="Notes">Notes</option>
                    <option value="Schedule">Schedule</option>
                    <option value="Important">Important!</option>
                </select>

                <input type="file" name="Upload file" id="fileupload" />


            </div>}




            <div className="announcement-card p-3 w-full h-auto border rounded-md flex flex-col space-y-2">
                <div className='flex flex-row items-end space-x-2'>
                    <p> Assignment1.pdf </p>
                </div>
                <div className="tag bg-blue-500 rounded-lg text-center text-white w-fit px-2">Assignment</div>
            </div>

            <div className="announcement-card p-3 w-full h-auto border rounded-md flex flex-col space-y-2">
                <div className='flex flex-row items-end space-x-2'>
                    <p> Unit1.pdf </p>
                </div>
                <div className="tag bg-green-500 rounded-lg text-center text-white w-fit px-2">Notes</div>
            </div>

            <div className="announcement-card p-3 w-full h-auto border rounded-md flex flex-col space-y-2">
                <div className='flex flex-row items-end space-x-2'>
                    <p> UpdatedClassSchedule.pdf </p>
                </div>
                <div className="tag bg-black rounded-lg text-center text-white w-fit px-2">Schedule</div>
            </div>

            <div className="announcement-card p-3 w-full h-auto border rounded-md flex flex-col space-y-2">
                <div className='flex flex-row items-end space-x-2'>
                    <p> Notice.pdf </p>
                </div>
                <div className="tag bg-red-700 rounded-lg text-center text-white w-fit px-2">Important</div>
            </div>
        </div>
    )
}

export default Files
