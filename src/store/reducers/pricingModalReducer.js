import * as actions from 'store/actions';

const initialState = {
  open: false
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PRICING_MODAL_OPEN: {
      return {
        ...state,
        open: true
      };
    }

    case actions.PRICING_MODAL_CLOSE: {
      return {
        ...state,
        open: false
      };
    }

    default: {
      return state;
    }
  }
};

export default navbarReducer;
