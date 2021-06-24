import {combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import topReducer from './topReducer'
import middleReducer from './middleReducer';
import bottomReducer from './bottomReducer';


const reducers = combineReducers(
    {
        top: topReducer,
        middle: middleReducer,
        bottomReducer: bottomReducer
    }
);

const store = createStore(reducers, applyMiddleware(thunk));

export default store;