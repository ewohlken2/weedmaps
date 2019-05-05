import styled from 'styled-components';
import { ImgWrapper } from '../avatar';
import { Heading3 } from '../../global.styles';
import { media } from '../../helpers/style.helper';

export const InfoWrapper = styled.div`
  margin-right: 20px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #ffffff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  ${ImgWrapper} {
    order: 2;
    width: 30%;
    min-width: 70px;

    ${media.lg`
      order: initial;
      flex: 0 0 70px;
      margin-right: 20px;
    `};
  }

  ${InfoWrapper} {
    width: 70%;

    ${media.lg`
      order: initial;
      flex: 1 0 auto;
    `};
  }
`;

export const CardHeading = styled(Heading3)`
  padding: 16px 0;

  ${media.lg`
    padding: 4px 0;
  `}
`;
