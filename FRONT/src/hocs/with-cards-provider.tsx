import { ComponentType, Component as ReactComponent } from 'react';

// CONTEXTS
import CardsProvider from '@contexts/cards.context';

// ACCOUNT HOC
const withCardsProvider = <P extends object>(Component: ComponentType<P>) =>
	class WithCardsProvider extends ReactComponent<P> {
		render() {
			const { ...props } = this.props;

			return (
				<CardsProvider>
					<Component {...(props as P)} />
				</CardsProvider>
			);
		}
	};

export default withCardsProvider;
