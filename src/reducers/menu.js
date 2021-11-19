import {
  OPEN_MENU_BURGER,
  CLOSE_MENU_BURGER,
} from 'src/actions/menu';

export const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU_BURGER:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_MENU_BURGER:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
