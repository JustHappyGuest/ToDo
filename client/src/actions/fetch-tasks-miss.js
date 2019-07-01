import {
  FETCH_TASKS_MISS_REQUEST,
  FETCH_TASKS_MISS_SUCCESS
} from '../action-types';

export default ({ getTasks }) => dispatch => () => {
  dispatch({ type: FETCH_TASKS_MISS_REQUEST});
  getTasks('miss').then(data => {
    dispatch({ type: FETCH_TASKS_MISS_SUCCESS, payload: { data } });
  });
};
