import React, { useEffect, useState } from 'react'
import { GrAnnounce } from "react-icons/gr";
import { getAllAnnouncements } from '../../axios/requests';
import { useParams } from 'react-router-dom';


const Announcement = () => {

  const [announcements, setAnnouncements] = useState([])

  const {id} = useParams()

  useEffect(() => {
    const doReq = async () => {
      try {
        const data = await getAllAnnouncements(id)
        setAnnouncements(data.reverse())
      } catch (error) {
        console.error(error)
      }
    }

    doReq()
  }, [])



  return (
    <div className='content-card space-y-3'>


      {(announcements.map((announcement) => (
        <div key={announcement.id} className="announcement-card p-3 w-full h-auto border rounded-md flex flex-row items-start">
          <GrAnnounce className='mr-2 size-5' />
          <p>{announcement.message} </p>
        </div>
      )))}

    </div>
  )
}

export default Announcement
