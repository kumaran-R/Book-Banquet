import { ADD_HALL,DELETE_HALL,FETCH_HALL, RESET_HALL,FETCH_HALLS} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/halls';

export const createPost = (body ) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, body)
            .then(response => {
                dispatch(createPostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createPostSuccess =  (data) => {
    return {
        type: ADD_HALL,
        payload: {
            createStatus: true,
            _id:data._id
        }
    }
};

export const deletePostSuccess = id => {
    return {
        type: DELETE_HALL,
        payload: {
            id
        }
    }
}

export const deletePost = id => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/${id}`)
            .then(response => {
                dispatch(deletePostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};


export const fetchHall = id => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/${id}`)
            .then(response => {
                dispatch(fetchHallSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};



export const fetchPosts = (posts) => {
    return {
        type: FETCH_HALLS,
        payload:posts
    }
};

export const fetchHallSuccess = (hall) => {
    return {
        type: FETCH_HALL,
        payload:hall
    }
};


export const resetHall = () => {
    return {
        type: RESET_HALL,
        
    }
};

export const fetchAllPosts = () => {
    return (dispatch) => {
        return axios.get(apiUrl+'/all')
            .then(response => {
                dispatch(fetchPosts(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};