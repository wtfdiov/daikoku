import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-js';

import authReducer from './reducers/auth';

import * as sagas from './sagas';

const rootReducer = combineReducers({
  auth: authReducer
});

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const configureStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(sagas.watchAuth);
  return store;
}
const store = configureStore();

export default store;