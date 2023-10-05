//import { useContext } from "react";
import { Navigator } from "../components/navigator/Navigator";
//import { AuthContext } from "../components/auth/AuthProvider";

export const Profile = () => {
    //const { nick, roles, user } = useContext(AuthContext).user.usuario;
    const { nick, roles, user } = JSON.parse(localStorage.getItem("user")).usuario;
    return (
        <>
            <div className="h-screen w-screen bg-[#222831]">
                <Navigator />
                <div>
                    <section className={`flex justify-center`}>
                        <div className="flex flex-col items-center justify-center">
                            <div style={{border: `8px solid ${user.banner_color}`}} className="w-fit relative top-20 rounded-full">
                                <img
                                    className="rounded-full"
                                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`}
                                    alt="Imagen de perfil"
                                />
                            </div>
                            <div style={{border: `8px solid ${user.banner_color}`, backgroundColor: `${user.banner_color}5a`}} className={`flex flex-col rounded-2xl items-center gap-7 p-10 pt-28`}>
                                <h2 className="text-xl">@{user.username}</h2>
                                <h1 className="text-2xl">{nick}</h1>
                                <div className="flex flex-row flex-wrap gap-5 border p-5">
                                    <p>Camper</p>
                                    <p>Gran Maestro</p>
                                    <p>Moderador</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};
