import * as actions from 'store/actions';

// const userRoles = ['GUEST', 'USER', 'ADMIN'];

const initialState = {
  signedIn: true,
  user: {
    first_name: 'Shen',
    last_name: 'Zhi',
    email: 'demo@demo.io',
    avatar: '/images/avatars/avatar_11.png',
    bio: 'Brain Director',
    role: 'ADMIN'
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_SIGN_IN: {
      return {
        ...state
      };
    }

    case actions.AUTH_SIGN_OUT: {
      return {
        ...state,
        signedIn: false,
        user: {
          role: 'GUEST'
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
