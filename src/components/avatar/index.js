import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ImgWrapper = styled.div`
  img {
    width: ${props => props.width};
    height: ${props => props.height};
    object-fit: cover;
    border-radius: 4px;
  }
`;

const Avatar = ({ img, width, height }) => (
  <ImgWrapper width={width} height={height}>
    <img src={img} alt="listing img" />
  </ImgWrapper>
);

Avatar.propTypes = {
  img: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

Avatar.defaultProps = {
  img: '',
  width: '100%',
  height: 'auto'
};

export default Avatar;
