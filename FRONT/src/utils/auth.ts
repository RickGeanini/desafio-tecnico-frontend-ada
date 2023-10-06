// ENUMS
import { EStorageKeys } from '@enums/storage';

// UTILS
import { getFromStorage } from '@utils/localStorageHelper';

export const getJWTToken = (): string | undefined => {
	const storageData = getFromStorage(EStorageKeys.LOGIN_DATA);
	return storageData;
};

export const getBearerAuthorization = () => {
	const jwtToken = getJWTToken();
	return jwtToken ? `Bearer ${jwtToken}` : '';
};
