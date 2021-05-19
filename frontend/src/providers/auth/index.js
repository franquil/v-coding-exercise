import { createContext, useContext, useState } from "react";

const defaultUser = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  username: "",
  setUsername: () => {},
};

const AuthContext = createContext(defaultUser);

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const authValue = {
    isAuthenticated,
    setIsAuthenticated,
    username,
    setUsername,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
export { AuthProvider, useAuth };
