import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthProvider";
import { LandingPage } from "../components/home/landingPage/LandingPage";
import { HomePage } from "../components/home/homePage/HomePage";

export const Home = () => {
    const { isAuthenticated } = useContext(AuthContext);

    const validate = () => {
        return isAuthenticated ? <HomePage /> : <LandingPage />;
    };
    return <>{validate()}</>;
};
