import styled from 'styled-components';
import { colors } from '../../global.styles';

export const ListingGroups = styled.div`
  h2 {
    text-align: left;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 16px;
`;

export const LocationSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 80px;
`;

export const LocateButton = styled.a`
  width: 115px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid #c2baba;
  color: ${colors.text};
  border-radius: 3px;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;

  svg {
    margin-right: 5px;
  }
`;

export const HeroSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e5e4e4;
  padding: 0 0 16px;

  h2 {
    font-weight: 300;
    color: ${colors.text};
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;
