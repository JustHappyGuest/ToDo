export default (state, { payload: { error } }) => {
  return {
    ...state,
    user: {
      loading: false,
      user: null,
      error
    }
  };
};
