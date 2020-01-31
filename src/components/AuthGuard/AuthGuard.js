import React, { Fragment, useEffect } from 'react';
import { matchRoutes } from 'react-router-config';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { useRouter } from 'hooks';

// const userRoles = ['GUEST', 'USER', 'ADMIN'];

const AuthGuard = props => {
  const { routes, children } = props;

  const auth = useSelector(state => state.auth);
  const router = useRouter();

  const checkAuth = () => {
    const matchedRoute = matchRoutes(routes, router.location.pathname)[0];
    const routeAuthSettings =
      matchedRoute &&
      matchedRoute.route.settings &&
      matchedRoute.route.settings.auth
        ? matchedRoute.route.settings.auth
        : null;

    if (!routeAuthSettings) {
      return;
    }

    if (!auth.signedIn) {
      router.history.push('/auth/sign-in');
      return;
    }

    if (!routeAuthSettings.includes(auth.user.role)) {
      router.history.push('/errors/error-401');
      return;
    }
  };

  useEffect(() => {
    checkAuth();
  });

  return <Fragment>{children}</Fragment>;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array
};

export default AuthGuard;
