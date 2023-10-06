// INTERFACES
import { ICard, ICardsList } from '@interfaces/cards';

export const normalizeCards = (cards: ICard[]): ICardsList => {
	return cards.reduce((prevCards: ICardsList, currentCard: ICard) => {
		const currentList = currentCard.lista;

		if (!prevCards[currentList]) {
			prevCards[currentList] = [];
		}

		prevCards[currentList].push(currentCard);
		return prevCards;
	}, {} as ICardsList);
};
