// INTERFACES
import { ICard, ICreateCardPayload } from '@interfaces/cards';
import { IHttpResponse } from '@interfaces/http';

// UTILS
import { deleteHandler, getHandler, postHandler, putHandler } from '@utils/httpClient';

export default class CardsService {
	baseUrl: string;

	constructor() {
		this.baseUrl = `${process.env.REACT_APP_BASE_API}/cards`;
	}

	public async createCard(payload: ICreateCardPayload): Promise<IHttpResponse<ICard>> {
		return await postHandler<ICreateCardPayload, ICard>(this.baseUrl, payload, true);
	}

	public async deleteCard(cardId: string): Promise<IHttpResponse<ICard[]>> {
		return await deleteHandler<ICard[]>(`${this.baseUrl}/${cardId}`, true);
	}

	public async listCards(): Promise<IHttpResponse<ICard[]>> {
		return await getHandler<ICard[]>(this.baseUrl, true);
	}

	public async updateCard(payload: ICard): Promise<IHttpResponse<ICard>> {
		return await putHandler<ICard, ICard>(`${this.baseUrl}/${payload.id}`, payload, true);
	}
}
