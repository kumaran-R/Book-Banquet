import { ADD_RESERVATION,DELETE_RESERVATION, FETCH_RESERVATION, FETCH_RESERVATION_LIST,RESET_RESERVATION} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/reservation';

export const createReservation = (body ) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, body)
            .then(response => {
                dispatch(createReservationSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createReservationSuccess =  (data) => {
    return {
        type: ADD_RESERVATION,
        payload: {
            createStatus: true,
            _id:data._id
        }
    }
};

export const deleteReservationSuccess = id => {
    return {
        type: DELETE_RESERVATION,
        payload: {
            id
        }
    }
}

export const deletePost = id => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/${id}`)
            .then(response => {
                dispatch(deleteReservationSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};


export const fetchReservation = id => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/${id}`)
            .then(response => {
                dispatch(fetchReservationSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};



export const fetchReservations = (posts) => {
    return {
        type: FETCH_RESERVATION_LIST,
        payload:posts
    }
};

export const fetchReservationSuccess = (hall) => {
    return {
        type: FETCH_RESERVATION,
        payload:hall
    }
};


export const resetReservation = () => {
    return {
        type: RESET_RESERVATION,

    }
};

export const fetchAllReservations = () => {
    return (dispatch) => {
        return axios.get(apiUrl+'/all')
            .then(response => {
                dispatch(fetchReservations(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};