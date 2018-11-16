
import { ADD_HALL, DELETE_HALL, FETCH_HALL } from '../actions/types';

export default function hallReducer(state = [], action) {
    switch (action.type) {
        case ADD_HALL:
            return [...state, action.payload];
        case DELETE_HALL:
            return state.filter(post => post._id !== action.payload.id);
        case FETCH_HALL:
            return action.payload;
        default:
            return state;
    }
}