import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  
  
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }


body {
  overflow-x: hidden;
  width: 100vw;
}

div#root{
  overflow-x: hidden;
  width: 100vw;
}


`;

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				{children}
			</>
		</ThemeProvider>
	);
};

export default Layout;
