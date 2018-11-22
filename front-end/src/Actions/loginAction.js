import { LOGIN} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/login';

export const login = (body) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, body)
            .then(response => {
                dispatch(loginSuccess(response.data))
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
