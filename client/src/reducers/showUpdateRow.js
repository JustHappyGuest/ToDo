import { cloneDeep } from "lodash";

export default (state, { payload: { deadline, id } }) => {
  const { tasks } = state;

  let update = {};

  if (!id) {
    update = {
      id,
      description: "",
      deadline
    };
  } else {
    const task = tasks.data.find(({ id: _id }) => _id === id);

    update = cloneDeep(task);
  }

  return {
    ...state,
    tasks: {
      ...tasks,
      update
    }
  };
};
