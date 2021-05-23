import {combineReducers, createStore} from 'redux';
import view1Reducer from './view1Reducer'


const reducers = combineReducers({view1: view1Reducer});

const store = createStore(reducers);
console.log(store);

export default store;