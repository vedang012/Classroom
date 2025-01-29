import React from 'react'

const ClassCard = ({id , bgImg, title, teacher}) => {

    const handleClassClick = () => {

        window.location.href = `/teacher-dashboard/class/${id}`
    }

    return (
        <div 
            className="class-card h-40 flex items-center justify-center border border-gray-300 rounded-xl hover-bgcolor" 
            style={{backgroundImage : `url(${bgImg})`, backgroundSize: 'cover'}}
            onClick={handleClassClick}
        >
            <div className="card-content flex justify-end flex-col items-start p-4 rounded-xl">
                <h1 className='font-medium'>{title}</h1>
                <p className='text-gray-700 font-medium text-sm'>{`- ${teacher}`}</p>
            </div>
        </div>
    )
}

export default ClassCard
