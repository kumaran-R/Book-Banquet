import { ADD_FOOD,DELETE_FOOD,FETCH_FOOD, RESET_FOOD,FETCH_FOODS} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/food';

export const createFood = (body ) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, body)
            .then(response => {
                dispatch(createFoodSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createFoodSuccess =  (data) => {
    return {
        type: ADD_FOOD,
        payload: {
            createStatus: true,
            _id:data._id
        }
    }
};

export const deleteFoodSuccess = id => {
    return {
        type: DELETE_FOOD,
        payload: {
            id
        }
    }
}

export const deleteFood = id => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/${id}`)
            .then(response => {
                dispatch(deleteFoodSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};


export const fetchFood = id => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/${id}`)
            .then(response => {
                dispatch(fetchFoodSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};



export const fetchFoods = (food) => {
    return {
        type: FETCH_FOODS,
        payload:food
    }
};

export const fetchFoodSuccess = (food) => {
    return {
        type: FETCH_FOOD,
        payload:food
    }
};


export const resetFood = () => {
    return {
        type: RESET_FOOD,

    }
};

export const fetchAllPosts = () => {
    return (dispatch) => {
        return axios.get(apiUrl+'/all')
            .then(response => {
                dispatch(fetchFoods(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};
