import { Navigate, useSearchParams, useNavigate } from "react-router-dom";
import { postAuth } from "../services/AuthService.js";
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/auth/AuthProvider.jsx";
import { CircularProgress } from "@nextui-org/react";

export const Auth = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { data, loading, error } = postAuth(searchParams.get("code"));
    const userAuth = () => {
        if (loading) return null;
        console.log(data.error);
        if (error || data?.error) {
            localStorage.removeItem("user");
            return navigate("/", { replace: true });
        }
        const dataClonada = structuredClone(data);
        login(dataClonada);
        navigate("/", { replace: true });
    };
    useEffect(() => {
        userAuth();
    }, [loading]);
    return (
        <>
            <div className="h-screen w-screen bg-[#222831] flex justify-center items-center">
                {loading && (
                    <CircularProgress
                        classNames={{ svg: "w-36 h-36 drop-shadow-md" }}
                        color="warning"
                        label="Cargando.."
                        aria-label="Cargando..."
                    />
                )}
            </div>
        </>
    );
};
