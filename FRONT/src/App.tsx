import React from 'react';

// CONTEXTS
import AuthContextProvider from '@contexts/auth.context';

// CONTAINERS
import CardsListContainer from '@containers/cards/list/List';

// STYLES
import { GlobalStyles } from '@styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<AuthContextProvider>
				<CardsListContainer />
			</AuthContextProvider>

			{/* Global Styles */}
			<GlobalStyles />
		</ThemeProvider>
	);
};

export default App;
