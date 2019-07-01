export default (state, { payload: { data } }) => {
  const { tasks } = state;
  return {
    ...state,
    tasks: {
      ...tasks,
      loading:false,
      data
    }
  };
};
