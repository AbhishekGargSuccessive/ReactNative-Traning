import React from 'react';
import MainStack from './app/routes/StackNavigator';
import ReduxApp from './app/redux';
import TestModel from './app/viewModels/testModel';

const App = () => {
  return (
    <MainStack />
    // <ReduxApp />/
    // <TestModel />
  )
}
export default App;
