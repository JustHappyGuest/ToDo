export default (state, { payload: { value: description } }) => {
  const { tasks } = state;
  const { update } = tasks;
  return {
    ...state,
    tasks: {
      ...tasks,
      update: {
        ...update,
        description
      }
    }
  };
}
