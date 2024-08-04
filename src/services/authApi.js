import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const loginRequest = async (request) => {
    try {
        const response = await axiosInstance.post("/auth/login", request);
        return response.data;
    }catch (error) {
        console.error(`[SERVICE] error occurred while login: ${error}`);
        throw error.response;
    }
};

export const registerRequest = async (request) => {
    try {
        const response = await axiosInstance.post("/auth/register", request);
        return response.data;
    }catch (error) {
        console.log(`[SERVICE] error occurred while register: ${error}`);
        throw error.response;
    }
}