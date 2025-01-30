import React, { useEffect, useState } from 'react'
import { GrAnnounce } from "react-icons/gr";
import { announce, getAllAnnouncements } from '../../axios/requests';
import { useParams } from 'react-router-dom';


const Announcement = ({ isTeacher }) => {

  const [message, setMessage] = useState("")
  const [announcements, setAnnouncements] = useState([])

  const handleMessegeChange = (e) => {
    setMessage(e.target.value)
  }

  const { id } = useParams();

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


  const makeAnnouncement = (e) => {
    if (e.key == "Enter") {
      const data = announce(message, id);
      setMessage("")
      window.location.reload()
    }

  }

  return (
    <div className='content-card space-y-3'>

      {isTeacher && <div className="announcement-card p-3 w-full h-auto border rounded-md flex flex-row items-start">

        <textarea
          className='w-full min-h-40 max-h-40 focus:border-0 focus:outline-none'
          name="message"
          id="message"
          placeholder='Announce something...'
          onKeyDown={(e) => makeAnnouncement(e)}
          onChange={(e) => handleMessegeChange(e)}
        />
      </div>}


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
