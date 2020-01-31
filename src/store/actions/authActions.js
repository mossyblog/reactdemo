export const AUTH_SIGN_IN = 'AUTH_SIGN_IN';
export const AUTH_SIGN_OUT = 'AUTH_SIGN_OUT';

export const authSignIn = () => dispatch =>
  dispatch({
    type: AUTH_SIGN_IN
  });

export const authSignOut = () => dispatch =>
  dispatch({
    type: AUTH_SIGN_OUT
  });
