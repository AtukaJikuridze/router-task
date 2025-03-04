import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles.css";

interface AuthContextType {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const login = (user: string) => {
    setUser(user);
    console.log(user);
  };
  const logout = () => {
    setUser(null);
    console.log(user);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const ProtectedRoute = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};
