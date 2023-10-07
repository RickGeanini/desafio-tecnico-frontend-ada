import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';

// ENUMS
import { ECardList } from '@enums/cards';

// HOOKS
import { useAuthContextHook } from './auth.context';

// INTERFACES
import { ICard, ICardsList, ICreateCardPayload } from '@interfaces/cards';
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
	cardDetails?: ICard;
	cardList: ICardsList;
	getCarList: () => Promise<void>;
	saveCard: () => Promise<void>;
	setCardDetails: React.Dispatch<React.SetStateAction<ICard | undefined>>;
}

// CARDS CONTEXT
const CardsContext = createContext<ICardsContext>({} as ICardsContext);

// CARDS CONTEXT PROVIDER
const CardsProvider = ({ children }: IChildrenProps) => {
	/* States */
	const [cardDetails, setCardDetails] = useState<ICard>();
	const [cardList, setCardList] = useState<ICardsList>(defaultProps);

	/* Hooks */
	const { loginHandler } = useAuthContextHook();

	/* SERVICES */
	const cardsService: CardsService = useMemo(() => {
		return new CardsService();
	}, []);

	const getCarListHandler = async () => {
		try {
			await loginHandler();

			const response = await cardsService.listCards();

			if (response.ok) {
				const normalizedCards = normalizeCards(
					defaultProps,
					response.jsonBody ?? ([] as ICard[]),
				);
				return setCardList(normalizedCards);
			}

			const err = response.jsonBody as IErrorMessage;
			console.error('Get Cards List Handler Error', err);
		} catch (err) {
			console.error('Get Cards List Handler Error', err);
		}
	};

	const saveCardHandler = useCallback(async () => {
		try {
			await loginHandler();

			const cleanedContent = DOMPurify.sanitize(cardDetails?.conteudo ?? '');

			const newPayload = {
				...cardDetails,
				conteudo: cleanedContent,
				lista: cardDetails?.lista ?? ECardList.TODO,
			};

			const response = !cardDetails?.id
				? await cardsService.createCard(newPayload as ICreateCardPayload)
				: await cardsService.updateCard(newPayload as ICard);

			if (response.ok) {
				const newCard = response.jsonBody as ICard;
				return setCardList(prevState => {
					const newCardList = newCard.lista;

					const prevItems = prevState[newCardList] ?? [];

					return {
						...prevState,
						[newCardList]: [...prevItems, newCard],
					};
				});
			}

			const err = response.jsonBody as IErrorMessage;
			console.error('Save Card Handler Error', err);
		} catch (err) {
			console.error('Save Card Handler Error', err);
		}
	}, [cardDetails]);

	/* Render */
	return (
		<CardsContext.Provider
			value={{
				cardDetails,
				cardList,
				getCarList: getCarListHandler,
				saveCard: saveCardHandler,
				setCardDetails,
			}}
		>
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
