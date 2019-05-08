export const NEW_TASK = "NEW_TASK";
export const CHANGE_DESCRIPTION = "CHANGE_DESCRIPTION";
export const CHANGE_DEADLINE = "CHANGE_DEADLINE";
export const CANCEL_UPDATE = "CANCEL_UPDATE";
export const ADD_TASK = "ADD_TASK";

export const newTask = () => ({type: NEW_TASK});
export const changeDescripton = (id ,value) => ({type: CHANGE_DESCRIPTION,id: id ,value: value});
export const changeDeadline = (id, direction) => ({type:CHANGE_DEADLINE,id: id, direction: direction});
export const cancelUpdate = id => ({type: CANCEL_UPDATE, id: id});
export const addTask = (id) => ({type: ADD_TASK, id: id});
