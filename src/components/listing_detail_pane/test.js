import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import config from '../../constants/config';
import ConnectedListingDetailPane, { ListingDetailPane } from './index';
import React from 'react';
import thunk from 'redux-thunk';
import get from 'lodash.get';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter, Route } from 'react-router-dom';
import testListing from '../../__test__/mocks/listing-mock.json';
import { ErrorWrapper } from './styles';

describe('<ListingDetailPane />', () => {
  const initialState = {
    location: {
      listing: testListing.data.listing
    }
  };

  const mockStore = configureMockStore([thunk]);
  let store, container, wmid;
  // TODO Add tests for the App component
  beforeEach(() => {
    wmid = get(testListing, 'data.listing.wmid');

    store = mockStore(initialState);

    container = mount(
      <MemoryRouter initialEntries={[`/${wmid}`]}>
        <Provider store={store}>
          <Route path={`/:listingId`} component={ConnectedListingDetailPane} />
        </Provider>
      </MemoryRouter>
    );
  });

  it('Renders without error', () => {
    const component = container.find(ListingDetailPane);
    expect(component.length).toEqual(1);

    const error = component.find(ErrorWrapper);
    expect(error.length).toEqual(0);
  });
});
