import { login } from '../../containers/Login/actions';

// синхронная валидация
export const validate = values => {
    const errors = {};
    if(!values.login){
        errors.login = 'Required field!';
    }
    if(!values.password){
        errors.password = 'Required field!';
    }
    // для синхронной валидации нужно вернуть объект с ошибками
    return errors
};

//асинхронная валидация
//принимает два параметра значения и redux dispatch
export const asyncValidate = (values, dispatch) => {
    return dispatch(login(values))
};