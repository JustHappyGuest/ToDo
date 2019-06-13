import { DateTime } from "luxon";

import {
  ADD_TASK,
  CANCEL_UPDATE_TASK,
  CHANGE_DEADLINE_TASK,
  CHANGE_DESCRIPTION_TASK,
  CHANGE_SEARCH,
  CHECK_TASKS_DEADLINE,
  COMPLETE_SELECTED_TASKS,
  COMPLETE_TASK,
  DELETE_SELECTED_TASKS,
  DELETE_TASK,
  FETCH_TASKS_SUCCESS,
  SELECT_ALL_TASKS,
  SELECT_TASK,
  SHOW_DROPDOWN,
  SHOW_UPDATE_ROW,
  UPDATE_SELECTED_TASKS,
  UPDATE_TASK
} from "../action-types";

export const fetchTasksSuccess = ({getTasks}) => dispatch => () => {
  getTasks().then(data => {
    dispatch({ type: FETCH_TASKS_SUCCESS, payload: { data } });
  });
};

export const showUpdateRow = dispatch => (id = 0) => {
  const deadline = DateTime.local().startOf("hour");
  return dispatch({ type: SHOW_UPDATE_ROW, payload: { deadline, id } });
};
export const changeDescriptonTask = value => ({
  type: CHANGE_DESCRIPTION_TASK,
  payload: { value }
});

export const changeDeadlineTask = (date, difference) => {
  const day = date.day;
  let newDate = date.plus({ minutes: difference });

  if (newDate.day !== day) newDate = newDate.set({ day });

  return {
    type: CHANGE_DEADLINE_TASK,
    payload: { newDate }
  };
};

export const cancelUpdateTask = () => ({ type: CANCEL_UPDATE_TASK });
export const addTask = ({createTask}) => (dispatch) => (data) => {
  createTask(data).then(res => {
    if(res) return dispatch({ type: ADD_TASK });
  })
};

export const changeSearch = value => ({
  type: CHANGE_SEARCH,
  payload: { value }
});

export const showDropdown = id => ({ type: SHOW_DROPDOWN, payload: { id } });
export const deleteTask = id => ({ type: DELETE_TASK, payload: { id } });
export const deleteSelectedTasks = () => ({ type: DELETE_SELECTED_TASKS });
export const updateTask = id => ({ type: UPDATE_TASK, payload: { id } });
export const updateSelectedTasks = () => ({ type: UPDATE_SELECTED_TASKS });
export const selectTask = id => ({ type: SELECT_TASK, payload: { id } });
export const selectAllTasks = () => ({ type: SELECT_ALL_TASKS });
export const completeTask = id => ({ type: COMPLETE_TASK, payload: { id } });
export const completeSelectedTasks = () => ({ type: COMPLETE_SELECTED_TASKS });
export const checkTasksDeadline = () => ({ type: CHECK_TASKS_DEADLINE });
