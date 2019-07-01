export const API = {
    BASE: () => 'http://localhost:3000/api/v1',

    LOGIN: () => `${API.BASE()}/login`,
    LOGOUT: () => `${API.BASE()}/logout`,
    ME: () => `${API.BASE()}/me`,
    USERS: () => `${API.BASE()}/users`,

    GET_TODO_LIST: () => `${API.BASE()}/todos`,
    DELETE_TODO_ITEM: (id) => `${API.BASE()}/todos/${id}`,
    ADD_TODO_ITEM: () => `${API.BASE()}/todos`,
    UPDATE_TODO_ITEM: (id) => `${API.BASE()}/todos/${id}`,
    GET_TODO_ITEM: (id) => `${API.BASE()}/todos/${id}`,
};
