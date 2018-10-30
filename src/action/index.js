const OPEN_MENU = 'OPEN_MENU';

export const openMenu = isOpen => {
  return {
    type: OPEN_MENU,
    isOpen
  };
};
