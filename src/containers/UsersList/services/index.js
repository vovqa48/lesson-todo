import axios from 'axios';
import { API } from '../../../services/api';

axios.defaults.withCredentials = true; 

export const LoadUsersListApi = () => {
    return axios.get(API.USERS())
};