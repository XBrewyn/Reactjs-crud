export const users = (state = [], action) => {
  if (action.type === 'ALL') {
    return action.payload;
  }

  return state;
};
