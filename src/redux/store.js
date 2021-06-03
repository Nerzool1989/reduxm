import {combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import topReducer from './topReducer'
import middleReducer from './middleReducer';


const reducers = combineReducers(
    {
        top: topReducer,
        middle: middleReducer
    }
);

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;