import { ReactNode, createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { IUser } from "../types/user";

interface AuthContextType {
  auth: IUser;
  // eslint-disable-next-line no-unused-vars
  changeAuth: (newAuth: IUser) => void;
  removeAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react/prop-types
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useLocalStorageState({
    key: "auth",
    initialState: null,
  });

  function changeAuth(newAuth: IUser) {
    setAuth(newAuth);
  }

  function removeAuth() {
    setAuth(null);
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        changeAuth,
        removeAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
