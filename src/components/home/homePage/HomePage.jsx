import React from "react";
import { CardCursos } from "./CardCursos";
import { Navigator } from "../../navigator/Navigator";
import { Link } from "react-router-dom";


export const HomePage = () => {
    const dataHome = {
        nameLastCourse : "Nombre del curso",
        imgLastCourse : "https://placehold.co/400",
        pathLastCourse : "/videos/pruebita",
        courses : [
            {
                nameCourse: "Nombre del curso1",
                description: "Breve descripcion del curso",
                patch: "/videos/pruebita",
                srcImg: "https://placehold.co/400",
            },
            {
                nameCourse: "Nombre del curso",
                description: "Breve descripcion del curso",
                patch: "/videos/pruebita",
                srcImg: "https://placehold.co/400",
            },
            {
                nameCourse: "Nombre del curso",
                description: "Breve descripcion del curso",
                patch: "/videos/pruebita",
                srcImg: "https://placehold.co/400",
            },
            {
                nameCourse: "Nombre del curso",
                description: "Breve descripcion del curso",
                patch: "/videos/pruebita",
                srcImg: "https://placehold.co/400",
            },
            {
                nameCourse: "Nombre del curso",
                description: "Breve descripcion del curso",
                patch: "/videos/pruebita",
                srcImg: "https://placehold.co/400",
            },
            {
                nameCourse: "Nombre del curso",
                description: "Breve descripcion del curso",
                patch: "/videos/pruebita",
                srcImg: "https://placehold.co/400",
            },
            {
                nameCourse: "Nombre del curso",
                description: "Breve descripcion del curso",
                patch: "/videos/pruebita",
                srcImg: "https://placehold.co/400",
            },
            {
                nameCourse: "Nombre del curso",
                description: "Breve descripcion del curso",
                patch: "/videos/pruebita",
                srcImg: "https://placehold.co/400",
            }
        ]
    }
    return (
        <>
            <div>
                <Navigator />
                <main className="border m-10 mt-0 mb-0 pb-10">
                    <div className="flex flex-row justify-around border-b-1">
                        <div className="flex flex-col justify-center gap-y-20">
                            <h1 className="text-5xl">{dataHome.nameLastCourse}</h1>
                            <Link to={dataHome.pathLastCourse} >
                            <button className="border">Continuar/Ver</button>
                            </Link>
                        </div>
                        <div>
                            <img src={dataHome.imgLastCourse} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <h1 className="p-5 text-4xl">Cursos</h1>
                        <div className="flex flex-row flex-wrap justify-center flex-shrink gap-10">
                            {
                                dataHome.courses.map((course, index) => {
                                    return (
                                        <CardCursos key={index} {...course} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};
