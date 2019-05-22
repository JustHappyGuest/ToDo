export const LOAD_TASKS = "LOAD_TASKS"; 

export const CHANGE_SEARCH = "CHANGE_SEARCH";
export const NEW_TASK = "NEW_TASK";
export const CHANGE_DESCRIPTION = "CHANGE_DESCRIPTION";
export const CHANGE_DEADLINE = "CHANGE_DEADLINE";
export const CANCEL_UPDATE = "CANCEL_UPDATE";
export const ADD_TASK = "ADD_TASK";
export const SHOW_DROPDOWN = "SHOW_DROPDOWN";
export const DELETE_TASK = "DELETE_TASK";
export const DELETE_SELECTED_TASKS = "DELETE_SELECTED_TASKS";
export const UPDATE_TASK = "UPDATE_TASK";
export const UPDATE_SELECTED_TASKS = "UPDATE_SELECTED_TASKS";
export const SELECT_TASK = "SELECT_TASK";
export const SELECT_ALL_TASKS = "SELECT_ALL_TASKS";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const COMPLETE_SELECTED_TASKS = "COMPLETE_SELECTED_TASKS";
export const CHECK_TASKS_DEADLINE = "CHECK_TASKS_DEADLINE";

export const loadTasks = (tasks) => ({type: LOAD_TASKS, tasks : tasks});

export const changeSearch = (value) => ({type: CHANGE_SEARCH, value: value});
export const newTask = () => ({type: NEW_TASK});
export const changeDescripton = (id ,value) => ({type: CHANGE_DESCRIPTION,id: id ,value: value});
export const changeDeadline = (id, direction) => ({type:CHANGE_DEADLINE,id: id, direction: direction});
export const cancelUpdate = id => ({type: CANCEL_UPDATE, id: id});
export const addTask = id => ({type: ADD_TASK, id: id});
export const showDropdown = id => ({type: SHOW_DROPDOWN, id: id});
export const deleteTask = id => ({type: DELETE_TASK, id: id});
export const deleteSelectedTasks = () =>({type:DELETE_SELECTED_TASKS});
export const updateTask = id => ({type: UPDATE_TASK, id: id});
export const updateSelectedTasks = () => ({type: UPDATE_SELECTED_TASKS});
export const selectTask = id => ({type: SELECT_TASK, id: id});
export const selectAllTasks = () => ({type: SELECT_ALL_TASKS});
export const completeTask = id => ({type: COMPLETE_TASK, id: id});
export const completeSelectedTasks = () => ({type:COMPLETE_SELECTED_TASKS});
export const checkTasksDeadline = () => ({type:CHECK_TASKS_DEADLINE});
