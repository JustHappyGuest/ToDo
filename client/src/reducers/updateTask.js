import { cloneDeep } from "lodash";

export default (state, { payload: { id } }) => {
  const { tasks } = state;
  const {data, update} = tasks;

  const _data = data.map(item => {
    const {id: _id} = item;
    if(_id === id) return update;
    return item;
  });

  return {
    ...state,
    tasks: {
      ...tasks,
      data: _data,
      update: null
    }
  };
};
