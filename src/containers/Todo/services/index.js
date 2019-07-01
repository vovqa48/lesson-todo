import axios from 'axios';
import { API } from '../../../services/api';

export const loadTodoListApi = () => {
    return axios.get(API.GET_TODO_LIST())
};

export const deleteTodoItemApi = (payload) => {
    return axios.delete(API.DELETE_TODO_ITEM(payload), payload)
};
