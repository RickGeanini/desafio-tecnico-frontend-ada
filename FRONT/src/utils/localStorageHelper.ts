// ENUMS
import { EStorageKeys } from '@enums/storage';

export const getFromStorage = (key: EStorageKeys) => {
	const rawData = localStorage.getItem(key);

	if (rawData) {
		const data = JSON.parse(rawData);
		return data;
	}

	return undefined;
};

export const saveOnStorage = <T>(key: EStorageKeys, value: T) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromStorage = (key: EStorageKeys) => {
	localStorage.removeItem(key);
};
