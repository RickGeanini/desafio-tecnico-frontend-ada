// INTERFACES
import { ECardList } from '@enums/cards';
import { ICard, ICardsList } from '@interfaces/cards';

export const normalizeCards = (defaultCards: ICardsList, cards: ICard[]): ICardsList => {
	return cards.reduce((prevCards: ICardsList, currentCard: ICard) => {
		const currentList = currentCard.lista;

		if (!prevCards[currentList]) {
			Object.keys(defaultCards).forEach(lista => {
				prevCards[lista as ECardList] = [];
			});
		}

		prevCards[currentList].push(currentCard);

		return prevCards;
	}, {} as ICardsList);
};
