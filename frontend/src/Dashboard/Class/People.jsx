import React, { useEffect, useState } from 'react'
import { getStudentsList } from '../../axios/requests'
import { useParams } from 'react-router-dom'

const People = () => {

    const { id } = useParams()
    const [people, setPeople] = useState([])

    useEffect(() => {
        const doReq = async () => {
            try {
                const peopleData = await getStudentsList(id)
                setPeople(peopleData)

            } catch (error) {
                console.error(error)
            }
        }

        doReq()
    }, [])

    return (
        <div>
            <div className='content-card space-y-3'>


                {(people.map((person) => (
                    <div className="announcement-card p-3 w-full h-auto border rounded-md flex flex-row items-start">
                        {person.email}
                    </div>
                )))}
            </div>
        </div>
    )
}

export default People
