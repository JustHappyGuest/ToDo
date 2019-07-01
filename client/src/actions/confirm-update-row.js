import { ADD_TASK, UPDATE_TASK } from "../action-types";

export default ({ createTask, updateTask }) => dispatch => data => {
  const { id, ...restData } = data;
  if (!id) {
    createTask(restData).then(id => {
      if (id) return dispatch({ type: ADD_TASK, payload: { id } });
    });
  } else {
    updateTask(id, restData).then(() => {
      return dispatch({ type: UPDATE_TASK, payload: { id } });
    });
  }
};
