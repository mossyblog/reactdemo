import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import theme from './theme';
import { configureStore } from './store';
import {
  AuthGuard,
  LayoutManager,
  GoogleAnalytics,
  ScrollReset,
  CookiesNotification
} from './components';
import routesConfig from './configs/routesConfig';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './assets/scss/index.scss';

const history = createBrowserHistory();
const store = configureStore();

const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <ScrollReset />
            <GoogleAnalytics />
            <CookiesNotification />
            <AuthGuard routes={routesConfig}>
              <LayoutManager routes={routesConfig} />
            </AuthGuard>
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
