import { LOGIN, LOGOUT, LOGIN_FAIL} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/login';

export const login = (body) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, body)
            .then(response => {
                
                if(response.data === true){
                    dispatch(loginSuccess(response.data))
                }
                if(response.data === false){
                    dispatch(loginFailure(response.data))
                }
                
                
                
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const loginSuccess =  (data) => {
    return {
        type: LOGIN,
        payload: {
            loginStatus: true,
            _id:data._id
        }
    }
};


export const loginFailure =  (data) => {
    return {
        type: LOGIN_FAIL,
        payload: {
            loginStatus: false,
            checkDetails:true
        }
    }
};



export const logout =  () => {
    return {
        type: LOGOUT,
        payload: {
            loginStatus: false,
        }
    }
};
