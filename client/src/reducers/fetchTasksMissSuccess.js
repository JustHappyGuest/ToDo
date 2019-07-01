export default (state, { payload: { data } }) => {
  const { missTasks } = state;
  return {
    ...state,
    missTasks: {
      ...missTasks,
      loading: false,
      data
    }
  };
};
