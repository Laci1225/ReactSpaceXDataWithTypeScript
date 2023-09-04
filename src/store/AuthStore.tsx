import {createContext} from "react";

interface AuthStoreContent {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void
}

const AuthStore = createContext<AuthStoreContent | null>(null);

export default AuthStore;