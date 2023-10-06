// INTERFACES
import { ICard, ICreateCardPayload } from '@interfaces/cards';

// UTILS
import { deleteHandler, getHandler, postHandler, putHandler } from '@utils/httpClient';

export default class CardsService {
	baseUrl: string;

	constructor() {
		this.baseUrl = `${process.env.REACT_APP_BASE_API}/cards`;
	}

	public async createCard(payload: ICreateCardPayload): Promise<ICard> {
		return await postHandler<ICreateCardPayload, ICard>(this.baseUrl, payload, true);
	}

	public async deleteCard(cardId: string): Promise<ICard[]> {
		return await deleteHandler<ICard[]>(`${this.baseUrl}/${cardId}`, true);
	}

	public async listCards(): Promise<ICard[]> {
		return await getHandler<ICard[]>(this.baseUrl, true);
	}

	public async updateCard(payload: ICard): Promise<ICard> {
		return await putHandler<ICard, ICard>(`${this.baseUrl}${payload.id}`, payload, true);
	}
}
