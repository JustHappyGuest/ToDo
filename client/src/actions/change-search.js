import { CHANGE_SEARCH } from "../action-types";

export default value => ({
  type: CHANGE_SEARCH,
  payload: { value }
});
