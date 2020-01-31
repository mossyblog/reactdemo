import * as actions from 'store/actions';

const initialState = {
  mobileOpen: false
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.NAVBAR_TOGGLE_MOBILE: {
      return {
        ...state,
        mobileOpen: !state.mobileOpen
      };
    }

    case actions.NAVBAR_OPEN_MOBILE: {
      return {
        ...state,
        mobileOpen: true
      };
    }

    case actions.NAVBAR_CLOSE_MOBILE: {
      return {
        ...state,
        mobileOpen: false
      };
    }

    default: {
      return state;
    }
  }
};

export default navbarReducer;
