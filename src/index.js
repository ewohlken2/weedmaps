import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './global.styles';

const cacheStore = window.localStorage.getItem('store') || {};
const store = configureStore(cacheStore);

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Component />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}
