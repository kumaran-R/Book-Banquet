import { ADD_HALL,DELETE_HALL,FETCH_HALL} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/halls';

export const createPost = ({ body }) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, {body})
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
            _id: data._id,
            title: data.title,
            body: data.body
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

export const fetchPosts = (posts) => {
    return {
        type: FETCH_HALL,
        payload:posts
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