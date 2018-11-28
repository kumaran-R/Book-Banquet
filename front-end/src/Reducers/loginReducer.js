
import { LOGIN, LOGOUT, LOGIN_FAIL } from './../Actions/types.js';

export default function loginReducer(state = {loginStatus:false}, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, loginStatus:true, login: action.payload.id};
        case LOGOUT:
            return {...state, loginStatus:false,  checkDetail:false};
        case LOGIN_FAIL:
            return {...state, loginStatus:false, checkDetail:true};
        default:
            return state;
    }
}
