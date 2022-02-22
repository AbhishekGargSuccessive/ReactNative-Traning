import React from 'react';
import MainStack from './app/routes/StackNavigator';
import ReduxApp from './app/redux';
import TestModel from './app/viewModels/testModel';
import {Provider} from 'react-redux';
import store from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};
export default App;
