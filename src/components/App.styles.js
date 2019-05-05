import styled from 'styled-components';

import { colors } from '../global.styles';

export const AppHeader = styled.div`
  padding: 0 20px;
  background-color: #222;
  color: #fff;

  div {
    min-height: 44px;
    max-height: 65px;
    height: 15vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 1200px;
    margin: 0 auto;
  }
  img {
    min-width: 110px;
    max-width: 135px;
    width: 40vw;
  }
`;

export const AppWrapper = styled.div`
  text-align: center;
`;

export const AppBackground = styled.div`
  background: ${colors.contentBg};
  padding-bottom: 20px;
`;

export const AppContent = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
`;

export const AppFooter = styled.div`
  background: #000000;
`;

export const AppFooterTop = styled.div`
  height: 80px;
  background: #73cbbe;
`;

export const AppFooterBottom = styled.div`
  height: 200px;
`;
