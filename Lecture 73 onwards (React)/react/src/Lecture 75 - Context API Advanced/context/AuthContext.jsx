import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [prevUser, setPrevUser] = useState();

  // name, email, password, phone
  function signUp({ name, email, password, phone }) {
    if (!name || !email || !password || !phone) {
      return false;
    }
    setUser({ name, email, password, phone });
    setPrevUser({ name, email, password, phone });
    return true;
  }

  function login({ email, password }) {
    if (email !== prevUser?.email || password !== prevUser.password) {
      return false;
    }
    return true;
  }

  function logout() {
    if (user) {
      setUser(null);
      return true;
    } else return false;
  }

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
