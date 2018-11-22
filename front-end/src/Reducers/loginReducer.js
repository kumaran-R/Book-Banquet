
import { LOGIN } from './../Actions/types.js';

export default function loginReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, loginStatus:true, login: action.payload.id};
        default:
            return state;
    }
}
