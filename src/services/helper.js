import _ from 'lodash';

export const isAdmin = ( role ) => role === 'admin' ? true : false;

export const serverError = ( errorApi ) => {
    
    if( _.isEmpty(errorApi.response) === false ) {

        const response = errorApi.response;
        const errData = response.data;
        const status = response.status;

        if( _.isEmpty(errData) === false ) {
            return errData.message;
        } else {
            return serverErrorCode(status);
        }
    } 

}

const serverErrorCode = (errorCode) => {
    switch( errorCode ) {

        case 401:
            return 'You are not authorized. Please login';
        
        case 403:
            return 'Access denied';

        default:
            return 'Server error. Please try again';
    }
}