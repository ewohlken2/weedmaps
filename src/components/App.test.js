import { mount } from 'enzyme';
import ConnectedApp, { App } from './App';
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import testLocation from '../__test__/mocks/location-mock.json';

describe('<App/>', () => {
  const initialState = {
    location: testLocation.data
  };

  const mockStore = configureStore([thunk]);
  let store, container;
  // TODO Add tests for the App component
  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <MemoryRouter>
        <Provider store={store}>
          <ConnectedApp />
        </Provider>
      </MemoryRouter>
    );
  });

  it('Renders without error', () => {
    expect(container.length).toEqual(1);
  });
});
