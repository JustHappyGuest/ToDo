export default (state, { payload: { id } }) => {
  const { tasks } = state;
  const { data } = tasks;

  const newData = data.filter(item => item.id !== id);

  return {
    ...state,
    tasks: {
      ...tasks,
      data: newData
    }
  };
};
