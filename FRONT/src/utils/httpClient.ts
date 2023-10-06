// INTERFACES
import { IErrorMessage, IHttpResponse } from '@interfaces/http';

// UTILS
import { getBearerAuthorization } from '@utils/auth';

const defaultFetchParams = {
	headers: {
		'Content-Type': 'application/json',
		Accept: '*/*',
		Authorization: '',
	},
};

const makeHttpResponse = async <T>(response: Promise<Response>) => {
	const newResponse = (await response) as IHttpResponse<T>;
	const jsonBody = (await newResponse.json()) as T & IErrorMessage;
	newResponse.jsonBody = jsonBody;
	return newResponse;
};

export const deleteHandler = async <T>(
	url: string,
	withAuthorization?: boolean,
): Promise<IHttpResponse<T>> => {
	const fetchParams = {
		...defaultFetchParams,
		method: 'DELETE',
	};

	if (withAuthorization) {
		fetchParams.headers.Authorization = getBearerAuthorization();
	}

	return await makeHttpResponse(fetch(url, fetchParams));
};

export const getHandler = async <T>(
	url: string,
	withAuthorization?: boolean,
): Promise<IHttpResponse<T>> => {
	const fetchParams = {
		...defaultFetchParams,
		method: 'GET',
	};

	if (withAuthorization) {
		fetchParams.headers.Authorization = getBearerAuthorization();
	}

	return await makeHttpResponse(fetch(url, fetchParams));
};

export const postHandler = async <P, T>(
	url: string,
	payload: P,
	withAuthorization?: boolean,
): Promise<IHttpResponse<T>> => {
	const fetchParams = {
		...defaultFetchParams,
		method: 'POST',
		body: JSON.stringify(payload),
	};

	if (withAuthorization) {
		fetchParams.headers.Authorization = getBearerAuthorization();
	}

	return await makeHttpResponse(fetch(url, fetchParams));
};

export const putHandler = async <P, T>(
	url: string,
	payload: P,
	withAuthorization?: boolean,
): Promise<IHttpResponse<T>> => {
	const fetchParams = {
		...defaultFetchParams,
		method: 'PUT',
		body: JSON.stringify(payload),
	};

	if (withAuthorization) {
		fetchParams.headers.Authorization = getBearerAuthorization();
	}

	return await makeHttpResponse(fetch(url, fetchParams));
};
