// UTILS
import { getBearerAuthorization } from './auth';

const defaultFetchParams = {
	headers: {
		'Content-Type': 'application/json',
		Accept: '*/*',
		Authorization: '',
	},
};

export const deleteHandler = async <T>(url: string, withAuthorization?: boolean): Promise<T> => {
	const fetchParams = {
		...defaultFetchParams,
		method: 'DELETE',
	};

	if (withAuthorization) {
		fetchParams.headers.Authorization = getBearerAuthorization();
	}

	return await (await fetch(url, fetchParams)).json();
};

export const getHandler = async <T>(url: string, withAuthorization?: boolean): Promise<T> => {
	const fetchParams = {
		...defaultFetchParams,
		method: 'GET',
	};

	if (withAuthorization) {
		fetchParams.headers.Authorization = getBearerAuthorization();
	}

	return await (await fetch(url, fetchParams)).json();
};

export const postHandler = async <P, T>(
	url: string,
	payload: P,
	withAuthorization?: boolean,
): Promise<T> => {
	const fetchParams = {
		...defaultFetchParams,
		method: 'POST',
		body: JSON.stringify(payload),
	};

	if (withAuthorization) {
		fetchParams.headers.Authorization = getBearerAuthorization();
	}

	return await (await fetch(url, fetchParams)).json();
};

export const putHandler = async <P, T>(
	url: string,
	payload: P,
	withAuthorization?: boolean,
): Promise<T> => {
	const fetchParams = {
		...defaultFetchParams,
		method: 'PUT',
		body: JSON.stringify(payload),
	};

	if (withAuthorization) {
		fetchParams.headers.Authorization = getBearerAuthorization();
	}

	return await (await fetch(url, fetchParams)).json();
};
