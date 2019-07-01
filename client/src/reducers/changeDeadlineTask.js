export default (state, { payload: { newDate: deadline } }) => {
  const { tasks } = state;
  const { update } = tasks;
  return {
    ...state,
    tasks: {
      ...tasks,
      update: {
        ...update,
        deadline
      }
    }
  };
}
