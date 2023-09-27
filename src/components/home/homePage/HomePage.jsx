import React from "react";
import { CardCursos } from "./CardCursos";
import { Navigator } from "../../navigator/Navigator";

export const HomePage = () => {
    return (
        <>
            <div>
                <Navigator />
                <main className="border m-10 mt-0 mb-0 pb-10">
                    <div className="flex flex-row justify-around border-b-1">
                        <div className="flex flex-col justify-center gap-y-20">
                            <h1 className="text-5xl">Nombre del curso</h1>
                            <button className="border">Continuar/Ver</button>
                        </div>
                        <div>
                            <img src="https://placehold.co/400" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <h1 className="p-5 text-4xl">Cursos</h1>
                        <div className="flex flex-row flex-wrap justify-center flex-shrink gap-10">
                            <CardCursos />
                            <CardCursos />
                            <CardCursos />
                            <CardCursos />
                            <CardCursos />
                            <CardCursos />
                            <CardCursos />
                            <CardCursos />
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
};
