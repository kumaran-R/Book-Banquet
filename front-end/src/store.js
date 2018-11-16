import { combineReducers } from 'redux';
import hallReducer from './Reducers/hallReducer.js';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";


const finalStore = combineReducers({
    hallReducer: hallReducer
});


const store = createStore(finalStore,applyMiddleware(thunk));



export default store;