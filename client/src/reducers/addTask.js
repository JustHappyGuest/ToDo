import { cloneDeep } from "lodash";

export default (state, { payload }) => {
  const { id } = payload;
  const { tasks } = state;
  const { update, data } = tasks;
  const task = cloneDeep(update);

  return {
    ...state,
    tasks: {
      ...tasks,
      data: [...data, {  ...task, id }],
      update: null
    }
  };
};
