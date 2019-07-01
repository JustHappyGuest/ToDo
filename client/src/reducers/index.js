import {
  ADD_TASK,
  CANCEL_UPDATE_TASK,
  CHANGE_DEADLINE_TASK,
  CHANGE_DESCRIPTION_TASK,
  CLEAR_USER_SUCCESS,
  DELETE_TASK,
  FETCH_TASKS_COMPLETE_REQUEST,
  FETCH_TASKS_COMPLETE_SUCCESS,
  FETCH_TASKS_MISS_REQUEST,
  FETCH_TASKS_MISS_SUCCESS,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  SHOW_UPDATE_ROW,
  UPDATE_TASK
} from '../action-types';

import addTask                    from "./addTask";
import cancelUpdateTask           from "./cancelUpdateTask";
import changeDeadlineTask         from "./changeDeadlineTask";
import changeDescriptonTask       from "./changeDescriptionTask";
import clearUserSuccess           from "./clearUserSuccess";
import createReducer              from "../utils/createReducer";
import deleteTask                 from "./deleteTask";
import fetchTasksCompleteRequest  from './fetchTasksCompleteRequest';
import fetchTasksCompleteSuccess  from "./fetchTasksCompleteSuccess";
import fetchTasksMissRequest      from './fetchTasksMissRequest';
import fetchTasksMissSuccess      from "./fetchTasksMissSuccess";
import fetchTasksRequest          from "./fetchTasksRequest";
import fetchTasksSuccess          from "./fetchTasksSuccess";
import getUserFailure             from "./getUserFailure";
import getUserSuccess             from "./getUserSuccess";
import initialState               from "../initialState";
import showUpdateRow              from "./showUpdateRow";
import updateTask                 from "./updateTask";

const reducer = createReducer(initialState, {
  [FETCH_TASKS_SUCCESS]:          fetchTasksSuccess,
  [FETCH_TASKS_REQUEST]:          fetchTasksRequest,
  [FETCH_TASKS_COMPLETE_SUCCESS]: fetchTasksCompleteSuccess,
  [FETCH_TASKS_COMPLETE_REQUEST]: fetchTasksCompleteRequest,
  [FETCH_TASKS_MISS_SUCCESS]:     fetchTasksMissSuccess,
  [FETCH_TASKS_MISS_REQUEST]:     fetchTasksMissRequest,
  [SHOW_UPDATE_ROW]:              showUpdateRow,
  [CHANGE_DESCRIPTION_TASK]:      changeDescriptonTask,
  [CHANGE_DEADLINE_TASK]:         changeDeadlineTask,
  [CANCEL_UPDATE_TASK]:           cancelUpdateTask,
  [ADD_TASK]:                     addTask,
  [GET_USER_SUCCESS]:             getUserSuccess,
  [GET_USER_FAILURE]:             getUserFailure,
  [CLEAR_USER_SUCCESS]:           clearUserSuccess,
  [DELETE_TASK]:                  deleteTask,
  [UPDATE_TASK]:                  updateTask
});

export default reducer;
