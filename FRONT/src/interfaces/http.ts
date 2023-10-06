export interface IErrorMessage {
	title: string;
	message: string;
}

export interface IHttpResponse<T> extends Response {
	jsonBody?: T & IErrorMessage;
}
