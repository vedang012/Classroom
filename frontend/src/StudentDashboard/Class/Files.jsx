import React from 'react'
import { MdOutlinePictureAsPdf } from "react-icons/md";

const Files = () => {
    return (
        <div className='content-card space-y-3'>
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
        </div>
    )
}

export default Files
