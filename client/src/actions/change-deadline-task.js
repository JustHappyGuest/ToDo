import { CHANGE_DEADLINE_TASK } from "../action-types";

export default (date, difference) => {
  const day = date.day;
  let newDate = date.plus({ minutes: difference });

  if (newDate.day !== day) newDate = newDate.set({ day });

  return {
    type: CHANGE_DEADLINE_TASK,
    payload: { newDate }
  };
};
