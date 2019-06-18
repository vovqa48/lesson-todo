import axios from 'axios';
import { API } from '../../../services/api';

export const loadTodoListApi = () => {
    return axios.get(API.GET_TODO_LIST())
};
