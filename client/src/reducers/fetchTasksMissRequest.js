export default (state) => {
  const { missTasks } = state;
  return {
    ...state,
    missTasks: {
      ...missTasks,
      loading:true,
      data: []
    }
  };
};
