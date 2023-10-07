import { createContext, useContext, useMemo } from 'react';

// ENUMS
import { EStorageKeys } from '@enums/storage';

// INTERFACES
import { IErrorMessage } from '@interfaces/http';
import { ILoginPayload } from '@interfaces/login';

// UTILS
import { saveOnStorage } from '@utils/localStorageHelper';

// SERVICES
import AuthService from '@services/auth';

// AUTH CONTEXT UTILS

interface IAuthContextContext {
	loginHandler: () => Promise<void>;
}

// AUTH CONTEXT
const AuthContext = createContext<IAuthContextContext>({} as IAuthContextContext);

// AUTH CONTEXT PROVIDER
const AuthContextProvider = ({ children }: IChildrenProps) => {
	/* SERVICES */
	const authService: AuthService = useMemo(() => {
		return new AuthService();
	}, []);

	const loginHandler = async () => {
		try {
			const payload = {
				login: process.env.REACT_APP_AUTH_LOGIN ?? '',
				senha: process.env.REACT_APP_AUTH_PASSWORD ?? '',
			} satisfies ILoginPayload;

			const response = await authService.loginHandler(payload);

			if (response.ok) {
				const token = (await response.jsonBody) as string;
				return saveOnStorage(EStorageKeys.LOGIN_DATA, token);
			}

			const err = response.jsonBody as IErrorMessage;
			console.error('Login Handler Error', err);
		} catch (err) {
			console.error('Login Handler Error', err);
		}
	};

	/* Render */
	return (
		<AuthContext.Provider
			value={{
				loginHandler,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

// USE AUTH CONTEXT HOOK
const useAuthContextHook = () => {
	const context = useContext(AuthContext);
	return context;
};

export { useAuthContextHook, AuthContextProvider as default };
