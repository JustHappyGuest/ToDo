export default (state, { payload: { data } }) => {
  const { completeTasks } = state;
  return {
    ...state,
    completeTasks: {
      ...completeTasks,
      loading:false,
      data
    }
  };
};
