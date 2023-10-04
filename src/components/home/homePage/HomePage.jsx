import React from "react";
import { CardCursos } from "./CardCursos";
import { Navigator } from "../../navigator/Navigator";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

export const HomePage = () => {
    const dataHome = {
        nameLastCourse: "Nombre del curso",
        imgLastCourse: "https://placehold.co/400",
        pathLastCourse: "/videos/pruebita",
        courses: [
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
            },
        ],
    };
    return (
        <>
            <div className="bg-[#222831]">
                <Navigator />
                {/* border m-10 mt-0 mb-0 pb-10 */}
                <main className="pb-10 2xl:border 2xl:m-10 2xl:mt-0 2xl:mb-0">
                    {/* flex flex-row justify-around border-b-1*/}
                    <div className="flex flex-col justify-center items-center border-b-1 lg:flex-row lg:gap-x-10 2xl:justify-around">
                        <div className="w-fit">
                            <img width={"100%"} height={"100%"} src={dataHome.imgLastCourse} alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-10 p-5">
                            <h1 className="text-5xl text-center">
                                {dataHome.nameLastCourse}
                            </h1>
                            <Link to={dataHome.pathLastCourse}>
                                <Button color="warning">Ver</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <h1 className="p-5 text-4xl">Cursos</h1>
                        <div className="flex flex-row flex-wrap justify-center flex-shrink gap-10">
                            {dataHome.courses.map((course, index) => {
                                return <CardCursos key={index} {...course} />;
                            })}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};
