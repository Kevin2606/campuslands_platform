//import { useContext } from "react";
import { Navigator } from "../components/navigator/Navigator";
//import { AuthContext } from "../components/auth/AuthProvider";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    //const { nick, roles, user } = useContext(AuthContext).user.usuario;
    const { nick, roles, user } = JSON.parse(
        localStorage.getItem("user")
    ).usuario;
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };
    return (
        <>
            <div className="h-screen w-screen bg-[#222831]">
                <Navigator />
                <div className="bg-[#222831]">
                    <section className="flex justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div
                                style={{
                                    border: `8px solid ${user.banner_color}`,
                                }}
                                className="w-fit relative top-20 rounded-full"
                            >
                                <img
                                    className="rounded-full"
                                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`}
                                    alt="Imagen de perfil"
                                />
                            </div>
                            <div
                                style={{
                                    border: `8px solid ${user.banner_color}`,
                                    backgroundColor: `${user.banner_color}33`,
                                }}
                                className={`flex flex-col rounded-2xl items-center gap-7 p-10 pt-28`}
                            >
                                <h2 className="text-xl">@{user.username}</h2>
                                <h1 className="text-2xl">{nick}</h1>
                                <div
                                    style={{
                                        borderColor: `${user.banner_color}`,
                                    }}
                                    className="w-56 lg:w-96 flex flex-row flex-wrap gap-5 border-y-5 p-5 items-center justify-center"
                                >
                                    <p className="text-lg italic" >Camper</p>
                                    <p className="text-lg italic">Gran Maestro</p>
                                    <p className="text-lg italic">Moderador</p>
                                    <p className="text-lg italic">Moderador</p>
                                    <p className="text-lg italic">Camper</p>
                                    <p className="text-lg italic">Gran Maestro</p>
                                    <p className="text-lg italic">Moderador</p>
                                    <p className="text-lg italic">Moderador</p>
                                </div>
                                <Button
                                    style={{
                                        border: `3px solid ${user.banner_color}`,
                                    }}
                                    variant="bordered"
                                    className="text-lg"
                                    onPress={handleLogout}
                                >
                                    Cerrar sesion
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};
