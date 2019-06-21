export const API = {
    BASE: () => 'http://localhost:3000/api/v1',

    LOGIN: () => `${API.BASE()}/login`,
    LOGOUT: () => `${API.BASE()}/logout`,
    ME: () => `${API.BASE()}/me`,

    GET_TODO_LIST: () => `${API.BASE()}/todos`,
};
