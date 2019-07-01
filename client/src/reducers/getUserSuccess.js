export default (state, { payload: { data } }) => {
  return {
    ...state,
    user: {
      loading:false,
      error: null,
      data
    }
  };
};
