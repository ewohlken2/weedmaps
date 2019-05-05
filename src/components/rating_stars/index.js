import React from 'react';
import StarSVG from '../../icons/star';
import {
  StarWrapper,
  ActiveStarWrapper,
  RatingStarsWrapper,
  RatingText
} from './styles';

const RatingStar = props => {
  const { fillPercent } = props;
  return (
    <StarWrapper>
      {fillPercent === 0 && <StarSVG stroke="#CECECE" fill="#CECECE" />}
      {fillPercent !== 0 && <StarSVG stroke="#73CBBD" fill="#ffffff" />}
      <ActiveStarWrapper width={`${fillPercent * 100}%`}>
        <StarSVG fill="#73CBBD" />
      </ActiveStarWrapper>
    </StarWrapper>
  );
};

const RatingStars = props => {
  const rating = parseInt(props.rating) || 0;
  const Stars = [];
  let i = 0;

  while (i < props.rating) {
    i++;
    if (props.rating - i >= 0) {
      Stars.push(<RatingStar key={i} fillPercent={1} />);
    } else {
      Stars.push(<RatingStar key={i} fillPercent={1 - (i - props.rating)} />);
    }
  }

  while (Stars.length < 5) {
    Stars.push(<RatingStar key={Stars.length + 1} fillPercent={0} />);
  }

  return (
    <RatingStarsWrapper>
      <RatingStarsWrapper>{Stars}</RatingStarsWrapper>
      <RatingText>{rating.toFixed(1)}</RatingText>
    </RatingStarsWrapper>
  );
};

export default RatingStars;
