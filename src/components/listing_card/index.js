import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { Link } from 'react-router-dom';
import Avatar from '../avatar';
import { TextContent } from '../../global.styles';
import RatingStars from '../rating_stars';
import { CardWrapper, InfoWrapper, CardHeading } from './styles';

const formatDistance = distance => {
  const distanceRounded = Math.round(
    distance >= 1 ? distance.toFixed(0) : distance.toFixed(1)
  );

  return `${distanceRounded}mi`;
};

const ListingCard = ({ listing }) => (
  <Link to={`${listing.wmid}`}>
    <CardWrapper>
      <Avatar img={`${get(listing, 'avatar_image.small_url')}`} />
      <InfoWrapper>
        <TextContent>
          {listing.city}, {listing.state} | {formatDistance(listing.distance)}
        </TextContent>
        <CardHeading> {listing.name} </CardHeading>
        <RatingStars rating={listing.rating} />
      </InfoWrapper>
    </CardWrapper>
  </Link>
);

ListingCard.propTypes = {
  listing: PropTypes.object
};

ListingCard.defaultProps = {
  listing: {}
};

export default ListingCard;
