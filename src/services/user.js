import axios from 'axios';
import { API } from './api';

axios.defaults.withCredentials = true; 

export const loginAPI = (payload) => {
    console.log(payload);
    return axios.post(API.LOGIN(), payload)
};

export const logoutAPI = () => {
    return axios.post(API.LOGOUT());
};