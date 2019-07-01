import { GET_USER_FAILURE, GET_USER_SUCCESS } from "../action-types";

export default ({ signIn }) => dispatch => (username, password) => {
  signIn({ username, password })
    .then(data => {
      return dispatch({
        type: GET_USER_SUCCESS,
        payload: { data }
      });
    })
    .catch(e => {
      return dispatch({
        type: GET_USER_FAILURE,
        payload: { error: e.message }
      });
    });
};
