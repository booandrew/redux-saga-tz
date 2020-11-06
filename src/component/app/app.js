import React from 'react';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux';
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';

import Main from '../main'
import { GlobalStyles } from '../../styles/global';
import { reducer } from '../../logic/app-logic';
import { watchLoadData } from '../../logic/saga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(watchLoadData)

const App = () => {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Provider store={store}>
        <Main />
      </Provider >
    </>
  );
}

export default App

