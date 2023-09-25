import React from "react";
import { CardCursos } from "./CardCursos";

export const HomePage = () => {
    return (
        <>
            <div className="pt-5">
                <header>
                    <div className="flex fle-row justify-around">
                        <h1>Blog</h1>
                        <h1>EduPlatform</h1>
                        <h1>Perfil</h1>
                    </div>
                </header>
                <main className="border m-10 mt-5">
                    <div className="flex flex-row justify-around border-b-1">
                        <div className="flex flex-col justify-center gap-y-20">
                            <h1 className="text-5xl">Nombre del curso</h1>
                            <button className="border">Continuar/Ver</button>
                        </div>
                        <div>
                            <img src="https://placehold.co/400" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1>Cursos</h1>
                        <CardCursos />
                        <CardCursos />
                        <CardCursos />
                        <CardCursos />
                        <CardCursos />
                        <CardCursos />
                        <CardCursos />
                        <CardCursos />

                    </div>
                </main>
            </div>
        </>
    );
};
