import { createStore, combineReducers } from "redux";
import controlTasks from "./reducers/controlTasks";

let  reducers = combineReducers({controlTasks});

let store = createStore(reducers);

export default store;