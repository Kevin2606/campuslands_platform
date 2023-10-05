import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

const AuthContext = createContext();

const init = () => {
    if (localStorage.getItem("user") === null) return { isAuthenticated: false };
    if (JSON.parse(localStorage.getItem("user")).error) return { isAuthenticated: false };
    return { isAuthenticated:true, user: JSON.parse(localStorage.getItem("user")) } 
};

const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (data) => {
        const dataClonada = structuredClone(data);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({
            type: "LOGIN",
            payload: dataClonada,
        });
    };

    const logout = () => {
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                ...authState,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
    AuthProvider,
}