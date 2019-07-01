import { DateTime } from "luxon";

import { SHOW_UPDATE_ROW } from "../action-types";

export default dispatch => (id = null) => {
  if (!id) {
    const deadline = DateTime.local().startOf("hour");
    return dispatch({ type: SHOW_UPDATE_ROW, payload: { deadline, id } });
  }

  return dispatch({ type: SHOW_UPDATE_ROW, payload: { deadline: null, id } });
};
