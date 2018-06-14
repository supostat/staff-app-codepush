import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import reducer from './reducers';
import * as sagas from './sagas/code-push-saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  // return Reactotron.createStore(reducer, {}, compose(applyMiddleware(thunk)));
  const store = createStore(
    reducer,
    compose(applyMiddleware(thunk, sagaMiddleware)),
  );
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  return store;
}
