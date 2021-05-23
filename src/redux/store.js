import {combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import view1Reducer from './view1Reducer'


const reducers = combineReducers({view1: view1Reducer});

const store = createStore(reducers, applyMiddleware(thunk));
console.log(store.getState());

export default store;