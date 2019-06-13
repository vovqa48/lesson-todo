import axios from 'axios';
import { API } from './api';

export const loadTodoListApi = () => {
    return axios.get(API.GET_TODO_LIST())
};
