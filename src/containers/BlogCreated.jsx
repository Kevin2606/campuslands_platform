import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthProvider";
import { useState } from "react";
import { Navigator } from "../components/navigator/Navigator";
import { CardAutor } from "../components/blog/CardAutor";
import {
    Input,
    Textarea,
    Select,
    SelectItem,
    Button,
    Spacer,
} from "@nextui-org/react";

export const BlogCreated = () => {
    const { nick, roles, ...rest } = useContext(AuthContext).user.usuario;

    const autor = {
        fullname: nick,
        roles: roles,
        avatar: `https://cdn.discordapp.com/avatars/${rest.user.id}/${rest.user.avatar}.png?size=256`
    };
    const createdAt = new Date().toLocaleDateString();
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        content: "",
        imageUrl: "",
        imageBackground: "",
    });
    const handleInputChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };
    const handleData = () => {
        const data = {...inputs, createdAt, autor};
        console.log(data);
    };

    const handleCreateBlog = () => {
        if (inputs.title === "") return alert("El titulo es requerido");
        if (inputs.description === "")
            return alert("La descripcion es requerida");
        if (inputs.content === "") return alert("El contenido es requerido");
        if (inputs.imageUrl === "") return alert("La imagen es requerida");
        if (inputs.imageBackground === "")
            return alert("La imagen de fondo es requerida");
        handleData();
    };

    return (
        <>
            <section className="bg-[#222831]">
                <Navigator />
                <div className="flex flex-col items-center gap-10 p-5 pt-10 lg:px-36">
                    <h1 className="text-4xl font-bold text-white">
                        Crear Blog
                    </h1>
                    <form className="flex flex-col items-center gap-10 lg:w-4/5 w-full">
                        <div className="flex flex-col items-center gap-10 lg:w-4/5 w-full bg-[#393e4643] p-5 lg:p-10 rounded-xl border-[#EEEEEE] border border-dashed">
                            <Input
                                label="Titulo"
                                placeholder="Titulo"
                                variant="bordered"
                                color="warning"
                                name="title"
                                isInvalid={inputs.title === ""}
                                onChange={handleInputChange}
                                isRequired
                            />
                            <Textarea
                                isRequired
                                label="Descripcion"
                                placeholder="Escribe una descripcion"
                                variant="bordered"
                                name="description"
                                isInvalid={inputs.description === ""}
                                onChange={handleInputChange}
                                color="warning"
                            />
                            <Textarea
                                isRequired
                                label="Contenido"
                                placeholder="Escribe el contenido del blog"
                                variant="bordered"
                                name="content"
                                isInvalid={inputs.content === ""}
                                onChange={handleInputChange}
                                color="warning"
                            />
                            <Input
                                label="Imagen del blog"
                                placeholder="https://placehold.co/1250x450"
                                variant="bordered"
                                color="warning"
                                isRequired
                                isInvalid={inputs.imageUrl === ""}
                                name="imageUrl"
                                onChange={handleInputChange}
                            />
                            <Select
                                placeholder="Selecciona imagen de fondo"
                                color="warning"
                                variant="bordered"
                                aria-label="Select an image"
                                name="imageBackground"
                                isInvalid={inputs.imageBackground === ""}
                                onChange={handleInputChange}
                                isRequired
                            >
                                <SelectItem value="1">Sin imagen</SelectItem>
                                <SelectItem value="2">Imagen 1</SelectItem>
                            </Select>
                        </div>
                        <Button
                            onPress={handleCreateBlog}
                            color="warning"
                            shadow
                        >
                            Crear
                        </Button>
                    </form>
                    <Spacer y={5} />
                    <CardAutor {...autor} createdAt={createdAt} />
                </div>
            </section>
        </>
    );
};
