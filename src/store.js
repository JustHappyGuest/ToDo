import { createStore, combineReducers } from "redux";
import tasks from "./reducers/tasks";

let  reducers = combineReducers({tasks});

let store = createStore(reducers);

export default store;