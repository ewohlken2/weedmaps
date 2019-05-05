import React from 'react';
import { Route } from 'react-router-dom';
import {
  AppHeader,
  AppWrapper,
  AppFooterTop,
  AppFooterBottom,
  AppFooter
} from './App.styles';
import ListingPage from './listing_page';
import logo from '../assets/logo.png';

export const NotFoundPage = props => {
  return <h1>Url requested was not found</h1>;
};

export const App = () => {
  return (
    <AppWrapper>
      <AppHeader>
        <div>
          <img src={logo} alt="weedmaps logo" />
        </div>
      </AppHeader>
      <Route path="/" component={ListingPage} />

      <AppFooter>
        <AppFooterTop />
        <AppFooterBottom />
      </AppFooter>
    </AppWrapper>
  );
};

export default App;
