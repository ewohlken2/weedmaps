import styled, { css, createGlobalStyle } from 'styled-components';

export const colors = {
  text: '#545252',
  lightText: '#777676',
  darkText: '#4B4B4B',
  contentBg: '#f2f5f5'
};
export const fonts = {
  // body: `Helvetica, 'Open Sans', sans-serif`,
  body: `proxima-nova, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;`
};

const HeadingStyles = css`
  margin: 0;
  color: ${colors.darkText};
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const TextContent = styled.div`
  text-align: left;
  color: ${colors.lightText};
  line-height: 25px;
  font-size: 14px;
`;

export const Heading2 = styled.h2`
  ${HeadingStyles};
  font-size: 24px;
  padding: 20px 0;

  svg + span {
    margin-left: 10px;
  }
`;

export const Heading3 = styled.h3`
  ${HeadingStyles};
  font-size: 20px;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: ${fonts.body};
    color: ${colors.text};

    * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    text-align: left;
  }

  button {
    appearance: none;
    background: initial;
    border: initial;
  }
`;

export default GlobalStyle;
