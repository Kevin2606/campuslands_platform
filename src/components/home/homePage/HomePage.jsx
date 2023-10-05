import React from "react";
import { CardCursos } from "./CardCursos";
import { Navigator } from "../../navigator/Navigator";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

export const HomePage = () => {
    const dataHome = {
        nameLastCourse: "JavaScript Moderno: Guía para dominar el lenguaje",
        imgLastCourse: "https://import.cdn.thinkific.com/643563/courses/1907483/IaFyqRTQCAph7DfFVjuA_Javascript-moderno-refresh1.png",
        pathLastCourse: "/videos/javascript",
        courses: [
            {
                nameCourse: "Docker - Guía práctica de uso para desarrolladores",
                description: "Breve descripcion del curso",
                patch: "/videos/docker",
                srcImg: "https://import.cdn.thinkific.com/643563/courses/2100309/FJdi8w3ORKSdzhLcV53c_Docker.jpg",
            },
            {
                nameCourse: "GIT+GitHub: Todo un sistema de control de versiones de cero",
                description: "Breve descripcion del curso",
                patch: "/videos/git",
                srcImg: "https://import.cdn.thinkific.com/643563/courses/1870146/idTZJiouTqWbJrtKBloh_git-github.jpg",
            },
            {
                nameCourse: "JavaScript Moderno: Guía para dominar el lenguaje",
                description: "Breve descripcion del curso",
                patch: "/videos/javascript",
                srcImg: "https://import.cdn.thinkific.com/643563/courses/1907483/IaFyqRTQCAph7DfFVjuA_Javascript-moderno-refresh1.png",
            },
            {
                nameCourse: "Node.Js: De cero a experto",
                description: "Breve descripcion del curso",
                patch: "/videos/nodejs",
                srcImg: "https://import.cdn.thinkific.com/643563/63BJ0OoTdCl8SPMlIOpA_NODE-JS-COVER-CURSO.jpg",
            },
            {
                nameCourse: "React: De cero a experto ( Hooks y MERN )",
                description: "Breve descripcion del curso",
                patch: "/videos/react",
                srcImg: "https://import.cdn.thinkific.com/643563/courses/1901683/3leYeOG2Qcu7PEZ1el4q_react.jpg",
            },
            {
                nameCourse: "SQL de cero: Tu guía práctica con PostgreSQL",
                description: "Breve descripcion del curso",
                patch: "/videos/sql",
                srcImg: "https://import.cdn.thinkific.com/643563/courses/2347687/yqioXcxTsWUJ7foeQFZl_SQL-COVER-CURSO.jpg",
            }
        ],
    };
    const navigate = useNavigate();
    const pressButton = () => {
        navigate(dataHome.pathLastCourse);
    };
    return (
        <>
            <div className="bg-[#222831]">
                <Navigator />
                {/* border m-10 mt-0 mb-0 pb-10 */}
                <main className="pb-10 2xl:m-10 2xl:mt-0 2xl:mb-0">
                    {/* flex flex-row justify-around border-b-1*/}
                    <div className="flex flex-col justify-center items-center border-b-2 lg:flex-row lg:gap-x-10 2xl:justify-around">
                        <div className="w-96">
                            <img width={"100%"} height={"100%"} src={dataHome.imgLastCourse} alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-10 p-5">
                            <h1 className="text-5xl text-center">
                                {dataHome.nameLastCourse}
                            </h1>
                            <Button onPress={pressButton} color="warning">Ver</Button>
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
