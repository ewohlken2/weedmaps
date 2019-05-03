import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import App from './components/App';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: sans-serif;
  }
`;

const cacheStore = window.localStorage.getItem('store') || {};
const store = configureStore(cacheStore);

render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
      <Link to="teTst">test</Link>
        <GlobalStyle />

      </React.Fragment>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
