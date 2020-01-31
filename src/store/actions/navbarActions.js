export const NAVBAR_TOGGLE_MOBILE = 'NAVBAR_TOGGLE_MOBILE';
export const NAVBAR_OPEN_MOBILE = 'NAVBAR_OPEN_MOBILE';
export const NAVBAR_CLOSE_MOBILE = 'NAVBAR_CLOSE_MOBILE';

export const navbarToggleMobile = () => dispatch =>
  dispatch({
    type: NAVBAR_TOGGLE_MOBILE
  });

export const navbarOpenMobile = () => dispatch =>
  dispatch({
    type: NAVBAR_OPEN_MOBILE
  });

export const navbarCloseMobile = () => dispatch =>
  dispatch({
    type: NAVBAR_CLOSE_MOBILE
  });
