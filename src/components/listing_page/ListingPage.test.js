import { mount } from 'enzyme';
import { ListingPage } from './index';
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter, Route } from 'react-router-dom';
import testLocation from '../../__test__/mocks/location-mock.json';
import { LocateButton } from './style';

describe('<ListingPage />', () => {
  const initialState = {
    location: testLocation.data
  };

  const mockStore = configureStore([thunk]);
  let store, container, locateMeSpy;
  // TODO Add tests for the App component
  beforeEach(() => {
    locateMeSpy = jest.spyOn(ListingPage.prototype, 'locateMe');

    store = mockStore(initialState);
    container = mount(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <Route path="/" component={ListingPage} />
        </Provider>
      </MemoryRouter>
    );
  });

  it('Renders without error', () => {
    expect(container.length).toEqual(1);
  });

  it('Locate me button works', () => {
    expect(() => container.find(LocateButton).simulate('click')).not.toThrow(
      TypeError
    );
    expect(locateMeSpy).toHaveBeenCalled();
  });
});
