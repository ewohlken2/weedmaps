import fetchMock from 'fetch-mock';
import get from 'lodash.get';
import 'isomorphic-fetch';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '.';
import * as types from '../constants/ActionTypes';
import config from '../constants/config';
import mockResponse from '../__test__/mocks/location-mock.json';
import mockListing from '../__test__/mocks/listing-mock.json';
import defaultTestCoords from '../__test__/mocks/coord-mock.json';

const mockStore = configureMockStore([thunk]);
describe('actions', () => {
  describe('request', () => {
    it('should create action for requesting locations', () => {
      const testAction = {
        type: types.REQUEST,
        coords: mockResponse
      };

      expect(actions.requestLocation(mockResponse)).toEqual(testAction);
    });
  });

  describe('recieve', () => {
    it('should create action for receiving locations', () => {
      const testAction = {
        type: types.RECEIVE,
        location: mockResponse.data.location,
        regions: mockResponse.data.regions
      };

      expect(actions.receiveLocation(defaultTestCoords, mockResponse)).toEqual(
        testAction
      );
    });
  });

  describe('locate', () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });
    it('dispatches Recieve when fetch is complete', () => {
      const store = mockStore();
      fetchMock.get(
        `https://${
          config.API_HOST
        }/wm/v2/location?include%5B%5D=regions.listings&latlng=33.666614%2C-117.756295`,
        mockResponse
      );

      store.dispatch(actions.locate(defaultTestCoords)).then(() => {
        expect(store.getActions()).toEqual([
          {
            type: types.REQUEST,
            coords: defaultTestCoords
          },
          {
            type: types.RECEIVE,
            location: mockResponse.data.location,
            regions: mockResponse.data.regions
          }
        ]);
      });
    });
  });

  describe('getListingDetails', () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    it('dispatches Recieve Listing when fetch is complete', () => {
      const store = mockStore();
      const id = get(mockListing, 'data.listings.wmid');

      fetchMock.get(
        `https://${config.API_HOST}/wm/v2/listings/${id}`,
        mockListing
      );

      store.dispatch(actions.getListingDetails(id)).then(() => {
        expect(store.getActions()).toEqual([
          {
            type: types.REQUEST_LISTING,
            listingId: id
          },
          {
            type: types.RECEIVE_LISTING,
            listing: mockListing.data.listing
          }
        ]);
      });
    });
  });
});
