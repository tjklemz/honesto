import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: sans-serif;
  }
  h1,h2,h3 {
    font-family: sans-serif;
  }
`;

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const Root = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

ReactDOM.render(<Root />, document.getElementById('root'));
