export interface ICreateCardPayload {
	content: string;
	list: string;
	title: string;
}

export interface ICard extends ICreateCardPayload {
	id: string;
}
