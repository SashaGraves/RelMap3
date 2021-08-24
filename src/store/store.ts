import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';

const middlewares = [];

if (__DEV__) {
  const {logger} = require('redux-logger');

  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middlewares),
);

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
