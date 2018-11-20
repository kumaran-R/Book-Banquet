
import { ADD_HALL, DELETE_HALL, FETCH_HALL, RESET_HALL,FETCH_HALLS } from './../Actions/types.js';

export default function hallReducer(state = {}, action) {
    switch (action.type) {
        case RESET_HALL:
            return {...state, createStatus:false, hall:{}};
        case ADD_HALL:
            return {...state, createStatus:true, hall: action.payload.id};
        case DELETE_HALL:
            return state.filter(post => post._id !== action.payload.id);
        case FETCH_HALL:
            return {...state, hall: action.payload};
        case FETCH_HALLS:
            return {...state, halls: action.payload};
        default:
            return state;
    }
}