// synchronous validation
export const validate = values => {
    const errors = {};
    if(!values.title){
        errors.title = 'Required field!';
    }
    if(!values.description){
        errors.description = 'Required field!';
    }

    return errors
};
