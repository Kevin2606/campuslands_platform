import { Navigate, useSearchParams, useNavigate } from "react-router-dom";
import { postAuth } from "../services/AuthService.js";
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/auth/AuthProvider.jsx";

export const Auth = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { data, loading, error } = postAuth(searchParams.get("code"));
    const userAuth = () => {
        if (loading) return null;
        if (error || data?.error) localStorage.removeItem("user", null);
        const dataClonada = structuredClone(data);
        login(dataClonada);
        navigate("/", { replace: true});
    };
    useEffect(() => {
        userAuth();
    }, [loading]);
    //TODO: Guardar el resultado en el localstorage, y redirigir a la home - Auth ProtectedRoute
    return (
        <>
            <h1>Auth</h1>
            {loading && <h2>Loading...</h2>}
        </>
    );
};
