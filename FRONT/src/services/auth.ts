// ENUMS
import { IHttpResponse } from '@interfaces/http';

// INTERFACES
import { ILoginPayload } from '@interfaces/login';

// UTILS
import { postHandler } from '@utils/httpClient';

export default class AuthService {
	baseUrl: string;

	constructor() {
		this.baseUrl = `${process.env.REACT_APP_BASE_API}/login`;
	}

	public async loginHandler(payload: ILoginPayload): Promise<IHttpResponse<string>> {
		return await postHandler<ILoginPayload, string>(this.baseUrl, payload);
	}
}
