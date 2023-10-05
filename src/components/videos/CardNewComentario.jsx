import { useState, useContext } from "react";
import { Textarea, Button } from "@nextui-org/react";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
const uriServer = import.meta.env.VITE_URI_SERVER_BACKEND


export const CardNewComentario = ({ id_padre, title }) => {
    const navigate = useNavigate();
    const { nick, user } = useContext(AuthContext).user.usuario;
    const [comentario, setComentario] = useState("");
    const handleComentario = async () => {
        if (comentario === "") return alert("El comentario es requerido");
        const data = {
            id_padre,
            comentario,
            createdAt: new Date().toLocaleDateString(),
            autor: {
                fullname: nick,
                avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`,
            },
        }
        const result = await fetch(`${uriServer}/comentarios`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        navigate(0);
    };

    return (
        <>
            <div className="flex flex-col gap-2 p-2">
                <Textarea
                    label="Comentario"
                    placeholder="Escribe un comentario en este video"
                    variant="bordered"
                    name="content"
                    onChange={(e) => setComentario(e.target.value)}
                    color="warning"
                />
                <div>
                    <Button color="warning" shadow onPress={handleComentario}>
                        Comentar
                    </Button>
                </div>
            </div>
        </>
    );
};
