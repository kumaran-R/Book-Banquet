
import { ADD_FOOD, DELETE_FOOD, FETCH_FOOD, RESET_FOOD,FETCH_FOODS } from './../Actions/types.js';

export default function foodReducer(state = {}, action) {
    switch (action.type) {
        case RESET_FOOD:
            return {...state, createStatus:false, food:{}};
        case ADD_FOOD:
            return {...state, createStatus:true, food: action.payload.id};
        case DELETE_FOOD:
            return state.filter(post => post._id !== action.payload.id);
        case FETCH_FOOD:
            return {...state, food: action.payload};
        case FETCH_FOODS:
            return {...state, foods: action.payload};
        default:
            return state;
    }
}
