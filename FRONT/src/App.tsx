import React from 'react';

// CONTEXTS
import AuthContextProvider from '@contexts/auth.context';

// CONTAINERS
import CardsListContainer from '@containers/cards/list/List';

const App = () => {
	return (
		<AuthContextProvider>
			<CardsListContainer />
		</AuthContextProvider>
	);
};

export default App;
