import { createContext, useContext, useMemo, useState } from 'react';

// ENUMS
import { ECardList } from '@enums/cards';

// INTERFACES
import { ICard, ICardsList } from '@interfaces/cards';
import { IErrorMessage } from '@interfaces/http';

// SERVICES
import CardsService from '@services/cards';

// UTILS
import { normalizeCards } from '@utils/cars';

// CARDS CONTEXT UTILS
const defaultProps = {
	[ECardList.TODO]: [],
	[ECardList.DOING]: [],
	[ECardList.DONE]: [],
} satisfies ICardsList;

interface ICardsContext {
	cardList: ICardsList;
	getCarList: () => Promise<void>;
}

// CARDS CONTEXT
const CardsContext = createContext<ICardsContext>({} as ICardsContext);

// CARDS CONTEXT PROVIDER
const CardsProvider = ({ children }: IChildrenProps) => {
	/* States */
	const [cardList, setCardList] = useState<ICardsList>(defaultProps);

	/* SERVICES */
	const cardsService: CardsService = useMemo(() => {
		return new CardsService();
	}, []);

	const getCarListHandler = async () => {
		try {
			const response = await cardsService.listCards();

			if (response.ok) {
				const normalizedCards = normalizeCards(response.jsonBody ?? ([] as ICard[]));
				return setCardList(normalizedCards);
			}

			const err = response.jsonBody as IErrorMessage;
			console.error('Get Cards List Handler Error', err);
		} catch (err) {
			console.error('Get Cards List Handler Error', err);
		}
	};

	/* Render */
	return (
		<CardsContext.Provider value={{ cardList, getCarList: getCarListHandler }}>
			{children}
		</CardsContext.Provider>
	);
};

// USE CARDS CONTEXT HOOK
const useCardsContextHook = () => {
	const context = useContext(CardsContext);
	return context;
};

export { useCardsContextHook, CardsProvider as default };
