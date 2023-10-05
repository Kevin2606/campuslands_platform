import { Card } from "@nextui-org/react";
import { Navigator } from "../components/navigator/Navigator";
import { CardComentarios } from "../components/videos/CardComentarios";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CardNewComentario } from "../components/videos/CardNewComentario";
//TODO: borrar esta linea
import { javascript } from "./prueba";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Videos = () => {
    const [dataVideos, setDataVideos] = useState([]);
    const [urlVideos, setUrlVideos] = useState("");
    const [tituloVideo, setTituloVideo] = useState("");
    const { name_curso } = useParams();
    const getAllVideosCourse = async () => {
        const url = `http://192.168.128.23:5010/cursos/v2?course=${name_curso}`;
        const dataVid = await (await fetch(url)).json();
        setDataVideos(dataVid);
    };
    useEffect(() => {
        getAllVideosCourse();
    }, []);

    const handleClick = (nameVideo, indexSeccion, tituloVideo) => {
        console.log(nameVideo, indexSeccion);
        //TODO: llamar a la api para obtener el video
        const url = `http://192.168.128.23:5010/cursos/play?course=${name_curso}&seccion=${
            indexSeccion + 1
        }&video=${nameVideo}`;
        setUrlVideos(url);
        setTituloVideo(tituloVideo)
    };

    return (
        <>
            <section className="bg-[#222831]">
                <Navigator />
                <div className="flex flex-col gap-8 py-10 lg:p-5 xl:p-10">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 items-stretch">
                        <div className="flex flex-col gap-5 w-fit lg:w-9/12">
                            <div>
                                {urlVideos !== "" ? (
                                    <video
                                        autoPlay
                                        controls
                                        className="lg:rounded-xl"
                                        src={urlVideos}
                                        alt=""
                                        height="100%"
                                        width="100%"
                                    />
                                ) : (
                                    <img
                                        className="lg:rounded-xl"
                                        src="https://placehold.co/1280x720"
                                        alt=""
                                        height="100%"
                                        width="100%"
                                    />
                                )}
                            </div>
                            <h1 className="text-3xl pl-2">{tituloVideo}</h1>
                        </div>
                        <div className="border-[#666] border-y-1 max-h-56 lg:border-x-1 lg:rounded-xl lg:flex-1 lg:max-h-[26rem] xl:max-h-[31.5rem] 2xl:max-h-[38.5rem] overflow-y-scroll">
                            <Accordion>
                                {dataVideos?.videos?.map((video, key) => (
                                    <AccordionItem
                                        key={key}
                                        aria-label={video.sectionName}
                                        title={video.sectionName}
                                    >
                                        {video.videos.map((v, k) => (
                                            <p
                                                key={k}
                                                className="py-1 border-b-1 cursor-pointer"
                                                onClick={() =>
                                                    handleClick(v.video, key, v.Titulo)
                                                }
                                            >
                                                {v.Titulo}
                                            </p>
                                        ))}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                    {/* Seccion comentarios */}
                    {/* <CardNewComentario /> */}
                    {/* Componente comentarios */}
                    <CardComentarios />
                    <CardComentarios />
                    <CardComentarios />
                </div>
            </section>
        </>
    );
};
