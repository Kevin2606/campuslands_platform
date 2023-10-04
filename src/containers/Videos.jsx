import { Card } from "@nextui-org/react";
import { Navigator } from "../components/navigator/Navigator";
import { CardComentarios } from "../components/videos/CardComentarios";

export const Videos = () => {
    return (
        <>
            <section className="bg-[#222831]">
                <Navigator />
                <div className="flex flex-col gap-8 p-10">
                    <div className="flex flex-row gap-20">
                        <div className="w-[1280px] h-[720px]">
                            <img
                                className="rounded-xl"
                                src="https://placehold.co/1280x720"
                                alt=""
                            />
                        </div>
                        <div className="border flex-1">
                            <h1 className="text-xl ">Componente acordion</h1>
                        </div>
                    </div>
                    <h1 className="text-3xl">Titulo video</h1>
                    {/* Seccion comentarios */}
                    {/* Componente comentarios */}
                    <CardComentarios />
                </div>
            </section>
        </>
    );
};
