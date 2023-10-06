import { ReactNode, createContext, useContext, useMemo } from 'react';

// ENUMS
import { EStorageKeys } from '@enums/storage';

// INTERFACES
import { ILoginPayload } from '@interfaces/login';

// UTILS
import { saveOnStorage } from '@utils/localStorageHelper';

// SERVICES
import AuthService from '@services/auth';

// AUTH CONTEXT UTILS
interface IAuthContextProvider {
	children?: ReactNode;
}

interface IAuthContextContext {
	loginHandler: () => Promise<void>;
}

// AUTH CONTEXT
const AuthContext = createContext<IAuthContextContext>({} as IAuthContextContext);

// AUTH CONTEXT PROVIDER
const AuthContextProvider = ({ children }: IAuthContextProvider) => {
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

			console.error('Login Handler Error');
		} catch (error) {
			console.error('Login Handler Error');
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
const useAuthContextContextHook = () => {
	const context = useContext(AuthContext);
	return context;
};

export { useAuthContextContextHook, AuthContextProvider as default };
