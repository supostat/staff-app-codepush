import { createStore, applyMiddleware, compose } from 'redux';
// import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default function configureStore() {
  // return Reactotron.createStore(reducer, {}, compose(applyMiddleware(thunk)));
  return createStore(
    reducer,
    compose(applyMiddleware(thunk)),
  );
}
