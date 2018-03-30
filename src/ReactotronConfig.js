import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
  .configure({
    name: 'React Native Demo',
  })
  .use(reactotronRedux())
  .useReactNative()
  .connect();
