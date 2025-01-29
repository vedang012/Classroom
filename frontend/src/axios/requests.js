import {getRequest,  postRequest } from './axiosReq'

// class get requests

export const getAllFiles = (id) => {
    const data = getRequest(`http://localhost:8080/teacher/${id}/file`)
    return data
}

export const getAllAnnouncements = (id) => {
    const data = getRequest(`http://localhost:8080/classroom/${id}/announcement`)
    return data
}

export const getCreatedClassroomList = () => {
    const data = getRequest(`http://localhost:8080/classroom/get/created-classes`)
    return data
}


export const getJoinedClassroomList = () => {
    const data = getRequest(`http://localhost:8080/classroom/get/joined-classes`)
    return data
}

export const getTeacherName = (id) => {
    const data = getRequest(`http://localhost:8080/classroom/${id}/teacher`)
    return data
}

export const getClassroomName = (id) => {
    const data = getRequest(`http://localhost:8080/classroom/${id}/name`)
    return data
}

export const getStudentsList = (id) => {
    const data = getRequest(`http://localhost:8080/classroom/${id}/students`)
    return data
}

// class post requests

export const createClass = (name, teacher, id) => {
    const classroomData = {
        classroomId : id,
        name: name,
        teacherName: teacher
    }

    const data = postRequest(`http://localhost:8080/teacher/classroom/new`, classroomData)
    return data
}

export const joinClass = (id) => {
    const data = postRequest(`http://localhost:8080/classroom/${id}/join`)
    return data
}

export const uploadFileData = (url, name, type, id) => {
    const fileData = {
        url: url,
        name: name,
        type: type
    }

    const data = postRequest(`http://localhost:8080/teacher/${id}/file`, fileData)
    return data
}

export const announce = (message, id) => {
    const announcementData = {
        message: message
    }

    const data = postRequest(`http://localhost:8080/teacher/${id}/announcement`, announcementData)
    return data
}

// Authentication post requests

export const registerStudent = (email, password) => {
    const user = {
        email: email,
        password: password,
        role: "ROLE_STUDENT"
    }

    const data = postRequest(`http://localhost:8080/register/student`, user)
    return data
}

export const registerTeacher = (email, password) => {
    const user = {
        email: email,
        password: password,
        role: "ROLE_TEACHER"
    }

    const data = postRequest(`http://localhost:8080/register/teacher`, user)
    return data
}

export const loginStudent = (email, password) => {
    const user = {
        email: email,
        password: password,
        role: "ROLE_STUDENT"
    }

    const data = postRequest(`http://localhost:8080/login/student`, user)
    return data
}

export const loginTeacher = (email, password) => {
    const user = {
        email: email,
        password: password,
        role: "ROLE_TEACHER"
    }

    const data = postRequest(`http://localhost:8080/login/teacher`, user, {withCredentials: true})
    return data
}



