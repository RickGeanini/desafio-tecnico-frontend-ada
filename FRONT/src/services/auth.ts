// ENUMS
import { EStorageKeys } from '@enums/storage';

// INTERFACES
import { ILoginPayload } from '@interfaces/login';

// UTILS
import { postHandler } from '@utils/httpClient';
import { saveOnStorage } from '@utils/localStorageHelper';

export default class AuthService {
	baseUrl: string;

	constructor() {
		this.baseUrl = `${process.env.REACT_APP_BASE_API}/login`;
	}

	public async loginHandler(): Promise<void> {
		const payload = {
			login: process.env.REACT_APP_AUTH_LOGIN ?? '',
			senha: process.env.REACT_APP_AUTH_PASSWORD ?? '',
		} satisfies ILoginPayload;

		try {
			const jwtToken = await postHandler<ILoginPayload, string>(this.baseUrl, payload);
			saveOnStorage(EStorageKeys.LOGIN_DATA, jwtToken);
		} catch (error) {
			console.error('Login Handler Error', error);
		}
	}
}
