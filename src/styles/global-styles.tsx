import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { ThemeProps } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
    ${normalize}
    * {
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
      font-family: 'Open Sans', sans-serif; 
      list-style: none;
    }
    html,
    body,
    #root {
        height: 100%;
        width: 100%;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      background: ${({ theme }) => theme.colors.body};
      color: ${({ theme }) => theme.colors.text};
      font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
      transition: all 0.50s linear;
    }
`;

export default GlobalStyle;
