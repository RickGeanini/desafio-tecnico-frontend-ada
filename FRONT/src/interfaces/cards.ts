// ENUMS
import { ECardList } from '@enums/cards';

export interface ICreateCardPayload {
	conteudo: string;
	lista: ECardList;
	titulo: string;
}

export interface ICard extends ICreateCardPayload {
	id: string;
}

export type ICardsList = Record<ECardList, ICard[]>;
