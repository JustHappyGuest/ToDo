export default state => {
  const { tasks } = state;
  return {
    ...state,
    tasks: {
      ...tasks,
      update: null
    }
  };
}
