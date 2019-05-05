import reducer from './location';
import {
  REQUEST,
  RECEIVE,
  ERROR,
  ERROR_LISTING
} from '../constants/ActionTypes';
import mockResponse from '../__test__/mocks/location-mock.json';
const TEST_ERROR = 'error';

const initialState = {
  isLocating: false,
  location: null,
  regions: null,
  listingId: null,
  listing: null,
  error: null,
  errorListing: null
};

describe('location reducer', () => {
  // TODO Write some tests for the TODOs reducer
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles location requests', () => {
    expect(
      reducer(initialState, {
        type: REQUEST
      })
    ).toEqual({
      ...initialState,
      isLocating: true
    });
  });

  it('handles location recieve', () => {
    expect(
      reducer(initialState, {
        type: RECEIVE,
        ...mockResponse.data
      })
    ).toEqual({
      ...initialState,
      isLocating: false,
      location: mockResponse.data.location,
      regions: mockResponse.data.regions
    });
  });

  it('handles error', () => {
    expect(
      reducer(initialState, {
        type: ERROR,
        error: TEST_ERROR
      })
    ).toEqual({
      ...initialState,
      isLocating: false,
      error: TEST_ERROR
    });
  });

  it('handles listing error', () => {
    expect(
      reducer(initialState, {
        type: ERROR_LISTING,
        error: TEST_ERROR
      })
    ).toEqual({
      ...initialState,
      errorListing: TEST_ERROR
    });
  });
});
