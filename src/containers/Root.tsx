import * as React from 'react';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import App from './App';
import rootReducer from '../reducers/rootReducer';
import rootEpic from '../epics/rootEpic';

export interface RootProps {
}

const store = createStore(rootReducer,applyMiddleware(createEpicMiddleware(rootEpic)));

const Root = () =>(<Provider store={store}>
        <App />
</Provider>);

export default Root;
