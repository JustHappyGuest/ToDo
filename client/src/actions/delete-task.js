import { DELETE_TASK } from '../action-types';

export default ({ deleteTask }) => dispatch => id => {
  deleteTask(id)
  .then((res) => {
    dispatch({type:DELETE_TASK, payload: {id}});
  });
};
