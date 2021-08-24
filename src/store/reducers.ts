import {combineReducers, Action} from 'redux';
import {LOG_IN, LOG_OUT} from './action-types';

const initialState = {
  isLogged: false,
};

const auth = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOG_IN:
      return {...state, isLogged: true};
    case LOG_OUT:
      return {...state, isLogged: false};
    default:
      return state;
  }
};

export default combineReducers({
  auth,
});
