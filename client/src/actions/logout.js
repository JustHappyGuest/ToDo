import { CLEAR_USER_SUCCESS } from "../action-types";

export default ({ logOut }) => dispatch => () => {
  logOut().then(data => {
    return dispatch({
      type: CLEAR_USER_SUCCESS
    });
  });
};
