export default (state) => {
  const { tasks } = state;
  return {
    ...state,
    tasks: {
      ...tasks,
      loading:true,
      data: []
    }
  };
};
