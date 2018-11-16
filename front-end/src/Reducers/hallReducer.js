
import { ADD_HALL, DELETE_HALL, FETCH_HALL } from './../Actions/types.js';

export default function hallReducer(state = {}, action) {
    switch (action.type) {
        case ADD_HALL:
            return {...state, hall: action.payload};
        case DELETE_HALL:
            return state.filter(post => post._id !== action.payload.id);
        case FETCH_HALL:
            return {...state, halls: action.payload};
        default:
            return state;
    }
}