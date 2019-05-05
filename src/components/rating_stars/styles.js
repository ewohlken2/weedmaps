import styled from 'styled-components';
import { colors } from '../../global.styles';

export const StarWrapper = styled.div`
  width: 26px;
  height: 26px;
  position: relative;
`;

export const ActiveStarWrapper = styled.div`
  width: ${props => props.width || '0%'};
  position: absolute;
  height: 100%;
  overflow: hidden;
  top: 0;

  > svg {
    width: 26px;
  }
`;

export const RatingStarsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingText = styled.span`
  font-weight: 500;
  color: ${colors.lightText};
`;
