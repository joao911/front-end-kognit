import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import {store} from './src/store';
import {Routes} from './src/routes';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#000"
          translucent
        />
        <Routes />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
