import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { locate } from '../actions';
import logo from '../assets/logo.png';
import ListingPage from './listing_page';
import { AppHeader, AppWrapper } from './App.styles';
import config from '../constants/config';

export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      loadingTimer: 0
    };
  }

  locateMe() {
    const { dispatch } = this.props;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(locate(position.coords));
      });
    }
  }

  render() {
    return (
      <Router>
        <AppWrapper>
          <AppHeader>
            <img src={logo} alt="weedmaps logo" />
          </AppHeader>
          {config.ROUTES.map(route => (
            <Route
              exact={route === '/' ? '' : null}
              path={route}
              component={config.ROUTES[route]}
            />
          ))}
          <Route path="/" component={ListingPage} />
        </AppWrapper>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return state.location;
};

App.propTypes = {
  isLocating: PropTypes.bool.isRequired,
  location: PropTypes.object,
  regions: PropTypes.object,
  dispatch: PropTypes.any,
  error: PropTypes.object
};

App.defaultProps = {
  isLocating: false,
  location: {},
  regions: {},
  error: {}
};

export default connect(mapStateToProps)(App);
