import axios from "axios"

export const getRequest = async (url, config = {headers : {"Authorization" : `Bearer ${localStorage.getItem("jwt")}`}}) => {
    try {
        const response = await axios.get(url, config);
        return response.data    
    } catch (error) {
        console.log("error occured in axios get req");
        throw error;
    }
}

export const postRequest = async (url, data, config = {headers : {"Authorization" : `Bearer ${localStorage.getItem("jwt")}`}}) => {
    try {
        const response = await axios.post(url, data, config);
        return response    
    } catch (error) {
        console.log("error occured in axios post req");
        throw error;
    }
}
