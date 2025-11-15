import React, { createContext, useContext, useEffect, useState } from "react";
import api, { setAuthToken } from "../api/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setTokenState] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthToken(token);
    if (token) {
      api.get("/auth/me").then(res => {
        setUser(res.data.user);
      }).catch(() => {
        setUser(null);
        localStorage.removeItem("token");
        setTokenState(null);
      }).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token]);

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    const t = res.data.token;
    localStorage.setItem("token", t);
    setTokenState(t);
    setAuthToken(t);
    setUser(res.data.user);
    return res;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setTokenState(null);
    setUser(null);
    setAuthToken(null);
  };

  const register = async (payload) => {
    const res = await api.post("/auth/register", payload);
    return res;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
