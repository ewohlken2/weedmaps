import styled from 'styled-components';
import { ImgWrapper } from '../avatar';
import { media } from '../../helpers/style.helper';

export const DetailPaneWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

export const ErrorWrapper = styled.div`
  padding: 30px;
`;

export const DetailPaneBox = styled.div`
  max-width: 90vw;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  background: white;
  position: relative;

  ${media.lg`
    max-width: 800px;
  `}

  > div {
    overflow: auto;
    max-height: 75vh;
  }

  ${ImgWrapper} {
    max-width: 300px;

    img {
      border-radius: 0;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 2px;
  top: 2px;
  height: 26px;
  width: 26px;
  opacity: 0.8;

  &::before,
  &::after {
    position: absolute;
    left: 10px;
    content: ' ';
    height: 27px;
    width: 2px;
    top: 0;
    background-color: #333;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const TextContentWrapper = styled.div`
  ${media.lg`
      display: flex;
      flex-direction: column;
  `};
`;

export const SectionWrapper = styled.div`
  margin-top: 20px;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  padding: 33px;
  text-align: left;

  ${media.lg`
    display: flex;

    ${ImgWrapper} {
      flex: 1 0 30%;
      
    }
    
    ${TextContentWrapper} {
      flex: 1 0 70%;
      padding-left: 20px;

    }


  `}
`;
