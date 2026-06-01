import { createContext, useContext, useEffect, useState } from "react";
import users from "../data/users";

const AuthContext = createContext(null);
const STORAGE_KEY = "shopsphere_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = (email, password) => {
    const match = users.find(
      (account) =>
        account.email.toLowerCase() === email.toLowerCase() && account.password === password
    );

    if (!match) {
      return { success: false, message: "Invalid email or password." };
    }

    const sessionUser = {
      id: match.id,
      email: match.email,
      name: match.name,
      role: match.role,
    };
    setUser(sessionUser);
    return { success: true, user: sessionUser };
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = user?.role === "admin";
  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
