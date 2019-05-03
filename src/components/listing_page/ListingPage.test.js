// import { mount } from 'enzyme';
// import ConnectedListingPage, { ListingPage } from './index';
// import React from 'react';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import testLocation from '../../__test__/mocks/location-mock.json';
// import { LocateButton } from '../App.styles';

// describe('<LocationPage />', () => {
//   const initialState = {
//     location: testLocation.data
//   };

//   const mockStore = configureStore([thunk]);
//   let store, container, locateMeSpy;
//   // TODO Add tests for the App component
//   beforeEach(() => {
//     locateMeSpy = jest.spyOn(ListingPage.prototype, 'locateMe');

//     store = mockStore(initialState);
//     container = mount(
//       <Provider store={store}>
//         <ListingPage />
//       </Provider>
//     );
//     console.log(store);
//   });

//   it('Renders without error', () => {
//     expect(container.length).toEqual(1);
//   });

//   // it('Locate me button works', () => {
//   //   expect(() => container.find(LocateButton).simulate('click')).not.toThrow(
//   //     TypeError
//   //   );
//   //   expect(locateMeSpy).toHaveBeenCalled();
//   // });
// });
