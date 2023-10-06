import { ReactNode, createContext, useContext } from 'react';

// CARDS CONTEXT UTILS
interface ICardsProvider {
	children?: ReactNode;
}

interface ICardsContext {}

// CARDS CONTEXT
const CardsContext = createContext<ICardsContext>({} as ICardsContext);

// CARDS CONTEXT PROVIDER
const CardsProvider = ({ children }: ICardsProvider) => {
	/* Render */
	return <CardsContext.Provider value={{}}>{children}</CardsContext.Provider>;
};

// USE CARDS CONTEXT HOOK
const useCardsContextHook = () => {
	const context = useContext(CardsContext);
	return context;
};

export { useCardsContextHook, CardsProvider as default };
