import { createContext, useContext, useMemo, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';

// ENUMS
import { ECardList } from '@enums/cards';

// HOOKS
import { useAuthContextHook } from '@contexts/auth.context';

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
	saveCard: (payload?: ICard) => Promise<void>;
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

			if (response.ok && (response.jsonBody ?? [])?.length > 0) {
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

	const saveCardHandler = async (payload?: ICard) => {
		try {
			await loginHandler();

			const newPayload = payload ?? cardDetails;

			if (!newPayload) {
				return;
			}

			const cleanedContent = DOMPurify.sanitize(newPayload?.conteudo ?? '');
			newPayload.conteudo = cleanedContent;

			if (!newPayload.lista) {
				newPayload.lista = ECardList.TODO;
			}

			const isEdit: boolean = !!cardDetails?.id;

			const response = isEdit
				? await cardsService.updateCard(newPayload as ICard)
				: await cardsService.createCard(newPayload as ICreateCardPayload);

			if (response.ok) {
				const newCard = response.jsonBody as ICard;

				return setCardList(prevState => {
					const newCardList = newCard.lista;
					const prevCards = prevState[newCardList] ?? [];

					/* INFO: Verify and Remove to state old "lista" */
					if (!!cardDetails && cardDetails?.lista !== newCardList) {
						const restCards = prevState[cardDetails.lista].filter(
							card => card.id !== cardDetails.id,
						);

						return {
							...prevState,
							[cardDetails.lista]: restCards,
							[newCardList]: [...prevCards, newCard],
						};
					}

					/* INFO: Get Array Index */
					const cardIndex = prevCards.findIndex(card => card.id === newCard.id);

					if (cardIndex < 0) {
						return {
							...prevState,
							[newCardList]: [...prevCards, newCard],
						};
					}

					/* INFO: Update item in array */
					prevCards[cardIndex] = newCard;

					return {
						...prevState,
						[newCardList]: prevCards,
					};
				});
			}

			const err = response.jsonBody as IErrorMessage;
			console.error('Save Card Handler Error', err);
		} catch (err) {
			console.error('Save Card Handler Error', err);
		}
	};

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
