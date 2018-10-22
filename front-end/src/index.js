import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux"
import hallReducer from "./Reducers/hallReducer"

const allReducers = combineReducers({
    hallReducer: hallReducer
})

const store = createStore(
    allReducers,
    {
        hallReducer: [
            {name: "Hall A"}
        ]
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
