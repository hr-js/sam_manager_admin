export const openMenu = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return Object.assign({}, state, {
        isOpen: !state.isOpen
      });
    default:
      return state;
  }
};