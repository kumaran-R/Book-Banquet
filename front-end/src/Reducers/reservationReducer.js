
import { ADD_RESERVATION, DELETE_RESERVATION, FETCH_RESERVATION, RESET_RESERVATION, FETCH_RESERVATION_LIST } from './../Actions/types.js';

export default function reservationReducer(state = {createStatus:false}, action) {
    switch (action.type) {
        case RESET_RESERVATION:
            return {...state, createStatus:false, reservation:{}};
        case ADD_RESERVATION:
            return {...state, createStatus:true, reservation: action.payload.id};
        case DELETE_RESERVATION:
            return state.filter(post => post._id !== action.payload.id);
        case FETCH_RESERVATION:
            return {...state, reservation: action.payload};
        case FETCH_RESERVATION_LIST:
            return {...state, reservations: action.payload};
        default:
            return state;
    }
}
