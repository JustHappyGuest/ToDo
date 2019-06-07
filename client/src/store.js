import { createStore, combineReducers } from "redux";
import controlTasks from './reducers/';

let  reducers = combineReducers({controlTasks});

let store = createStore(reducers);

export default store;
