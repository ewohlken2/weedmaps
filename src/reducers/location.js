import {
  REQUEST,
  RECEIVE,
  ERROR,
  REQUEST_LISTING,
  RECEIVE_LISTING,
  ERROR_LISTING
} from '../constants/ActionTypes';

const locationListing = (
  state = {
    isLocating: false,
    location: null,
    regions: null,
    listingId: null,
    listing: null,
    error: null,
    errorListing: null
  },
  action
) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLocating: true
      };
    case RECEIVE:
      return {
        ...state,
        isLocating: false,
        location: action.location,
        regions: action.regions,
        error: null
      };
    case REQUEST_LISTING:
      return {
        ...state,
        listingId: action.listingId,
        listing: null,
        errorListing: null
      };
    case RECEIVE_LISTING:
      return {
        ...state,
        listing: action.listing
      };
    case ERROR_LISTING:
      return {
        ...state,
        errorListing: action.error
      };
    case ERROR:
      return {
        ...state,
        isLocating: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default locationListing;
