import axios from 'axios';

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});

const axiosPosts = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

export const createPost = async (request) => {

    try {
        const response = await axiosPosts.post(`/posts`, request);
        return response.data;
    }catch (error) {
        console.log(error);
        throw error;
    }
}

export const getPendingPosts = async () => {

    try {
        const response = await axiosInstance.get(`/posts/pending`);
        return response.data;
    }catch (error) {
        console.error(`[SERVICE] error occurred while login: ${error}`);
        throw error.response;
    }
};

export const getApprovedPost = async () => {

    try {
        const response = await axiosInstance.get(`/posts/published`);
        return response.data;
    }catch (error) {
        console.error(`[SERVICE] error occurred while request data: ${error}`);
        throw error.response;
    }
};

export const approvePost = async(idPost) => {
    try {
        const response = await axiosInstance.post(`/posts/approve/${idPost}`, idPost);
        return response.data;
    } catch (error){
    console.error(`[SERVICE] error occurred while approving data: ${error}`);
    throw error.response;
}
}