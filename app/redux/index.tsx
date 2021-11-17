import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Counterdemo from './store';

const store = createStore(reducers)

const ReduxApp = () => {

    return (
        <Provider store={store}>
            <Counterdemo />
        </Provider>
    );

}

export default ReduxApp;


