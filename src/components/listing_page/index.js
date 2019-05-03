import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import { locate } from '../../actions';
import ListingCards from '../listing_cards';
import Locate from '../../icons/locate';
import MapPin from '../../icons/map-pin';
import {
  AppContent,
  ListingGroups,
  HeroSection,
  ContentContainer,
  LocationSection,
  TextContent,
  LocateButton
} from '../App.styles';

const regionTypes = ['delivery', 'dispensary', 'doctor'];
const regionLabels = {
  delivery: 'Deliveries',
  dispensary: 'Dispensaries',
  doctor: 'Doctors'
};

export class ListingPage extends Component {
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

  getLabel(listings, label) {
    if (get(listings, 'listings').length) {
      return (
        <div key={label}>
          <strong> {label} </strong>
        </div>
      );
    }
    return <div />;
  }

  render() {
    const { isLocating, location, regions, error } = this.props;

    return (
      <React.Fragment>
        <HeroSection>
          <ContentContainer>
            <LocationSection>
              <h2>
                <MapPin fill={'#7e7979'} width={'60px'} height={'40px'} />
                <span> {location ? location.name : ''} </span>
                <span> {isLocating && !location ? '...locating' : ''} </span>
              </h2>
              <LocateButton onClick={this.locateMe.bind(this)}>
                <Locate fill={'#7e7979'} />
                <span> Locate Me </span>
              </LocateButton>
            </LocationSection>
            <TextContent>
              Lorem Ipsum dolor sit amet, consectetur adispiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aligqua. Ut
              enim ad minim veniam, quis.
            </TextContent>
          </ContentContainer>
        </HeroSection>
        <AppContent>
          {error && <div> {error.message} </div>}
          {regions && (
            <React.Fragment>
              {regionTypes.map(regionType => (
                <ListingGroups key={regionType}>
                  <h2>
                    {this.getLabel(
                      regions[regionType],
                      regionLabels[regionType]
                    )}
                  </h2>
                  <ListingCards
                    listings={get(regions[regionType], 'listings')}
                  />
                </ListingGroups>
              ))}
            </React.Fragment>
          )}
        </AppContent>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state.location;
};

ListingPage.propTypes = {
  isLocating: PropTypes.bool.isRequired,
  location: PropTypes.object,
  regions: PropTypes.object,
  dispatch: PropTypes.any,
  error: PropTypes.object
};

ListingPage.defaultProps = {
  isLocating: false,
  location: {},
  regions: {},
  error: {}
};

export default connect(mapStateToProps)(ListingPage);
