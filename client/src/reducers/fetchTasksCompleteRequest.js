export default (state) => {
  const { completeTasks } = state;
  return {
    ...state,
    completeTasks: {
      ...completeTasks,
      loading:true,
      data: []
    }
  };
};
