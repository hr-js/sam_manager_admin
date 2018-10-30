export const menu = (state = { isOpen: false, items: [] }, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return Object.assign({}, state, {
        isOpen: !state.isOpen,
        items: ['Recent', 'Users', 'Chart']
      });
    default:
      return state;
  }
};
