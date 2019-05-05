import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import { locate } from '../../actions';
import ListingCards from '../listing_cards';
import Locate from '../../icons/locate';
import MapPin from '../../icons/map-pin';
import { Route } from 'react-router-dom';
import defaultTestCoords from '../../__test__/mocks/coord-mock.json';
import { AppContent, AppBackground } from '../App.styles';
import {
  ListingGroups,
  HeroSection,
  ContentContainer,
  LocationSection,
  LocateButton
} from './style';
import ListingDetailPane from '../listing_detail_pane';
import { Delivery } from '../../icons/delivery';
import { Dispensary } from '../../icons/dispensary';
import { Doctor } from '../../icons/doctor';
import { colors, Heading2, TextContent } from '../../global.styles';

const regionTypes = ['dispensary', 'delivery', 'doctor'];
const regionLabels = {
  delivery: 'Delivery Services',
  dispensary: 'Dispensary Storefronts',
  doctor: 'Doctors'
};
const regionIcons = {
  delivery: Delivery,
  dispensary: Dispensary,
  doctor: Doctor
};

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export class ListingPage extends Component {
  constructor(props) {
    super();
  }

  locateMe() {
    const { dispatch } = this.props;

    if (navigator.geolocation) {
      dispatch(locate(defaultTestCoords));
    }
  }

  getLabel(listings, label, Icon) {
    if (get(listings, 'listings').length) {
      return (
        <React.Fragment key={label}>
          <Icon height="24" width="24" fill={colors.darkText} />
          <span> {label} </span>
        </React.Fragment>
      );
    }
    return <div />;
  }

  render() {
    const { isLocating, location, regions, error, match } = this.props;
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
        <AppBackground>
          <AppContent>
            {error && <div> {error.message} </div>}
            {regions && !isEmpty(regions) && (
              <React.Fragment>
                {regionTypes.map(regionType => (
                  <ListingGroups key={regionType}>
                    <Heading2>
                      {this.getLabel(
                        regions[regionType],
                        regionLabels[regionType],
                        regionIcons[regionType]
                      )}
                    </Heading2>
                    <ListingCards
                      listings={get(regions[regionType], 'listings')}
                    />
                  </ListingGroups>
                ))}
              </React.Fragment>
            )}
          </AppContent>
        </AppBackground>
        <Route path={`${match.url}:listingId`} component={ListingDetailPane} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...state.location, match: ownProps.match };
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
