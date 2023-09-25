import { Navigate, useSearchParams } from "react-router-dom";
import { postAuth } from "../services/AuthService.js";

export const Auth = () => {
    const [searchParams] = useSearchParams();
    const { data, loading, error } = postAuth(searchParams.get("code"));
    const userAuth = () => {
        if (loading) return null;
        if (error || data?.error) localStorage.setItem("user", null);
        localStorage.setItem("user", JSON.stringify(data));
        return <Navigate to="/" replace={true} />;
    };

    //TODO: Guardar el resultado en el localstorage, y redirigir a la home - Auth ProtectedRoute
    return (
        <>
            <h1>Auth</h1>
            {loading && <h2>Loading...</h2>}
            {userAuth()}
        </>
    );
};
