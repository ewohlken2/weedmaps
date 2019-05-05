import React, { Component } from 'react';
import get from 'lodash.get';
import { connect } from 'react-redux';
import Avatar from '../avatar';
import { getListingDetails } from '../../actions';
import { Link } from 'react-router-dom';
import RatingStars from '../rating_stars';
import { Heading3, Heading2, TextContent } from '../../global.styles';
import {
  DetailPaneBox,
  DetailPaneWrapper,
  CloseButton,
  ContentWrapper,
  TextContentWrapper,
  SectionWrapper,
  ErrorWrapper
} from './styles';

export class ListingDetailPane extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { dispatch } = this.props;

    dispatch(getListingDetails(match.params.listingId));
  }

  render() {
    const { listing, error } = this.props;
    return (
      <DetailPaneWrapper>
        <DetailPaneBox>
          <Link to="/">
            <CloseButton />
          </Link>

          {error && <ErrorWrapper> {error.message} </ErrorWrapper>}

          <div>
            {listing && (
              <ContentWrapper>
                <Avatar img={`${get(listing, 'avatar_image.original_url')}`} />
                <TextContentWrapper>
                  <Heading2>{listing.name}</Heading2>
                  <RatingStars rating={listing.rating} />
                  <TextContent>{listing.phone_number}</TextContent>
                  <SectionWrapper>
                    <Heading3>Address</Heading3>

                    {listing.address && (
                      <TextContent>{listing.address},</TextContent>
                    )}
                    <TextContent>
                      {listing.city}, {listing.state} {listing.zip_code}
                    </TextContent>
                  </SectionWrapper>
                  <SectionWrapper>
                    <Heading3>Business Hours</Heading3>
                    {Object.keys(listing.business_hours).map(day => {
                      const hours = listing.business_hours[day];

                      if (hours['open']) {
                        return (
                          <TextContent key={day}>
                            {day}: {hours['open']} - {hours['close']}
                          </TextContent>
                        );
                      } else {
                        return <TextContent>{day}: Closed</TextContent>;
                      }
                    })}
                  </SectionWrapper>
                  <SectionWrapper>
                    <TextContent
                      dangerouslySetInnerHTML={{ __html: listing.description }}
                    />
                  </SectionWrapper>
                </TextContentWrapper>
              </ContentWrapper>
            )}
          </div>
        </DetailPaneBox>
      </DetailPaneWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    listing: state.location.listing,
    error: state.location.errorListing,
    match: ownProps.match
  };
};

export default connect(mapStateToProps)(ListingDetailPane);
