import axios from 'axios';
import { API } from '../../../services/api';

axios.defaults.withCredentials = true; 

export const loginAPI = (payload) => {
    return axios.post(API.LOGIN(), payload)
};

export const logoutAPI = () => {
    return axios.post(API.LOGOUT());
};

export const meAPI = () => {
    return axios.get(API.ME());
};