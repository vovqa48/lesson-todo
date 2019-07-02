import axios from 'axios';
import { API } from '../../../services/api';

export const loadTodoListApi = () => {
    return axios.get(API.GET_TODO_LIST())
};

export const loadTodoApi = (id) => {
    return axios.get(API.GET_TODO_ITEM(id))
};

export const deleteTodoItemApi = (payload) => {
    return axios.delete(API.DELETE_TODO_ITEM(payload), payload)
};

export const addTodoItemApi = (payload) => {
    return axios.post(API.ADD_TODO_ITEM(), payload)
};

export const updateTodoItemApi = (id, payload) => {
    return axios.put(API.UPDATE_TODO_ITEM(id), payload)
};

export const getTodoItemApi = (id) => {
    return axios.get(API.GET_TODO_ITEM(id))
};