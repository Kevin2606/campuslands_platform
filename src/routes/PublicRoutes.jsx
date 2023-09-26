import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/auth/AuthProvider";

export const PublicRoutes = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? children : <Navigate to="/" /> ;
};