export const menu = (state = { open: false, items: [] }, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return Object.assign({}, state, {
        open: !state.open,
        items: ['Recent', 'Users', 'Chart']
      });
    default:
      return state;
  }
};
