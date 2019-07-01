import {
  FETCH_TASKS_COMPLETE_REQUEST,
  FETCH_TASKS_COMPLETE_SUCCESS
} from '../action-types';

export default ({ getTasks }) => dispatch => () => {
  dispatch({ type: FETCH_TASKS_COMPLETE_REQUEST});
  getTasks('complete').then(data => {
    dispatch({ type: FETCH_TASKS_COMPLETE_SUCCESS, payload: { data } });
  });
};
