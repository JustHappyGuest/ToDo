import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS } from '../action-types';

export default ({ getTasks }) => dispatch => () => {
  dispatch({ type: FETCH_TASKS_REQUEST});
  getTasks().then(data => {
    dispatch({ type: FETCH_TASKS_SUCCESS, payload: { data } });
  });
};
