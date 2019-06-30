// synchronous validation
export const validate = values => {
    const errors = {};
    if(!values.login){
        errors.login = 'Required field!';
    }
    if(!values.password){
        errors.password = 'Required field!';
    }

    return errors
};