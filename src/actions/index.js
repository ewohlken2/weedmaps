import * as types from '../constants/ActionTypes';
import config from '../constants/config';
import get from 'lodash.get';

export const requestLocation = coords => ({
  type: types.REQUEST,
  coords
});

export const requestListingDetails = listingId => ({
  type: types.REQUEST_LISTING,
  listingId
});
export const receiveListingDetails = (listingId, json) => ({
  type: types.RECEIVE_LISTING,
  listing: get(json, 'data.listing')
});

export const receiveLocation = (coords, json) => ({
  type: types.RECEIVE,
  location: json.data.location,
  regions: json.data.regions
});

export const error = e => ({
  type: types.ERROR,
  error: e,
  message: 'Oops something went wrong'
});

export const errorListing = e => ({
  type: types.ERROR_LISTING,
  error: e
});

export const locate = coords => async dispatch => {
  const params = [
    `include${encodeURIComponent('[]')}=regions.listings`,
    `latlng=${encodeURIComponent(`${coords.latitude},${coords.longitude}`)}`
  ];
  const url = `https://${config.API_HOST}/wm/v2/location?${params.join('&')}`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  };

  try {
    dispatch(requestLocation(coords));
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(receiveLocation(coords, data));
  } catch (e) {
    dispatch(error(e));
  }
};

export const getListingDetails = id => async dispatch => {
  const url = `https://${config.API_HOST}/wm/v2/listings/${id}`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  };

  try {
    dispatch(requestListingDetails(id));
    const response = await fetch(url, options);
    const data = await response.json();

    if (data.errors) {
      dispatch(
        errorListing({
          message: data.errors[0].detail
        })
      );
    } else {
      dispatch(receiveListingDetails(id, data));
    }
  } catch (e) {
    dispatch(errorListing(e));
  }
};
