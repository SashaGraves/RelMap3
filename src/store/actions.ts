import {LOG_IN, LOG_OUT} from './action-types';

export const loginAction = () => ({
  type: LOG_IN,
});

export const logoutAction = () => ({
  type: LOG_OUT,
});
