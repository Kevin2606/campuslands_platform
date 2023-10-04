import { Link } from "react-router-dom";

export const Navigator = () => {
    return (
        <header className="relative z-20 pt-5 pb-5 w-full border-b bg-none">
            <div className="flex fle-row justify-around">
                <Link to="/blog">
                    <h1>Blog</h1>
                </Link>
                <Link to="/">
                    <h1>EduPlatform</h1>
                </Link>
                <Link to="/profile">
                    <h1>Perfil</h1>
                </Link>
            </div>
        </header>
    );
};
