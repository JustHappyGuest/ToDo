import {
  ADD_TASK,
  CANCEL_UPDATE,
  CHANGE_DEADLINE,
  CHANGE_DESCRIPTION,
  CHANGE_SEARCH,
  CHECK_TASKS_DEADLINE,
  COMPLETE_SELECTED_TASKS,
  COMPLETE_TASK,
  DELETE_SELECTED_TASKS,
  DELETE_TASK,
  LOAD_TASKS,
  NEW_TASK,
  SELECT_ALL_TASKS,
  SELECT_TASK,
  SHOW_DROPDOWN,
  UPDATE_SELECTED_TASKS,
} from '../action-types/index';

export const loadTasks = (tasks) => ({type: LOAD_TASKS, payload : {tasks}});



export const changeSearch = (value) => ({type: CHANGE_SEARCH, payload : {value}});
export const newTask = () => ({type: NEW_TASK});
export const changeDescripton = (id ,value) => ({type: CHANGE_DESCRIPTION, payload:{id, value}});
export const changeDeadline = (id, direction) => ({type:CHANGE_DEADLINE, payload:{id, direction}});
export const cancelUpdate = id => ({type: CANCEL_UPDATE,payload:{id}});
export const addTask = id => ({type: ADD_TASK, payload: {id}});
export const showDropdown = id => ({type: SHOW_DROPDOWN, payload: {id}});
export const deleteTask = id => ({type: DELETE_TASK, payload: {id}});
export const deleteSelectedTasks = () =>({type:DELETE_SELECTED_TASKS});
export const updateTask = id => ({type: UPDATE_TASK, payload:{id}});
export const updateSelectedTasks = () => ({type: UPDATE_SELECTED_TASKS});
export const selectTask = id => ({type: SELECT_TASK, payload: {id}});
export const selectAllTasks = () => ({type: SELECT_ALL_TASKS});
export const completeTask = id => ({type: COMPLETE_TASK, payload:{id}});
export const completeSelectedTasks = () => ({type:COMPLETE_SELECTED_TASKS});
export const checkTasksDeadline = () => ({type:CHECK_TASKS_DEADLINE});
