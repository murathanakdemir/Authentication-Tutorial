import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.GOOGLE_URL
});

export default instance