import { useState, useContext } from "react";
import { Textarea, Button } from "@nextui-org/react";
import { AuthContext } from "../auth/AuthProvider";

export const CardNewComentario = () => {
    const { nick, user } = useContext(AuthContext).user.usuario;
    const [comentario, setComentario] = useState("");
    const handleComentario = () => {
        if (comentario === "") return alert("El comentario es requerido");
        const data = {
            comentario,
            createdAt: new Date().toLocaleDateString(),
            autor: {
                fullname: nick,
                avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`,
            },
        };
        console.log(data);
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
