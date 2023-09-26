import React, { useContext } from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { AuthContext } from "../components/auth/AuthProvider";

export const PrivateRoutes = ({Component}) => {
     const { isAuthenticated } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    const lastPath = pathname + search;
    localStorage.setItem("lastPath", lastPath);
    return isAuthenticated ? Component : <Navigate to="/" />;
};
