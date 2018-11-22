import { combineReducers } from 'redux';
import hallReducer from './Reducers/hallReducer.js';
import foodReducer from './Reducers/foodReducer.js';
import reservationReducer from './Reducers/reservationReducer.js';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";


const finalStore = combineReducers({
    hallReducer: hallReducer,
    foodReducer: foodReducer,
    reservationReducer:reservationReducer
});


const store = createStore(finalStore,applyMiddleware(thunk));



export default store;