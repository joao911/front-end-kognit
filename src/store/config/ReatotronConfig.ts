import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

export default Reactotron.configure({
  name: 'kognit',
})
  .use(reactotronRedux())
  .useReactNative()
  .connect();
