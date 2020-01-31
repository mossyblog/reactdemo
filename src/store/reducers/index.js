import { combineReducers } from 'redux';

import authReducer from './authReducer';
import navbarReducer from './navbarReducer';
import pricingModalReducer from './pricingModalReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  navbar: navbarReducer,
  pricingModal: pricingModalReducer
});

export default rootReducer;
