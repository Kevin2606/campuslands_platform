import React from "react";

export const CardComentarios = () => {
    return (
        <div className="flex flex-col gap-7 border p-5">
            <div className="flex flex-row gap-5">
                <div>
                    <img
                        className="rounded-full"
                        src="https://placehold.co/150"
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-rol gap-10">
                        <h2>Nombre</h2>
                        <h3>DD/MM/AAAA</h3>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quod laborum placeat, soluta porro consectetur
                            quae odio consequatur iure quasi odit ad ea!
                            Tempora, illum! Molestiae voluptatibus pariatur
                            maxime in, saepe aperiam laudantium tempora culpa
                            optio, voluptas quibusdam at nostrum excepturi
                            magnam repudiandae omnis cupiditate eum
                            exercitationem minus sequi veritatis! Ad eveniet
                            ducimus quidem fugiat facere, fugit explicabo,
                            repellendus assumenda eum cum aspernatur tempore
                            illum magni!
                        </p>
                    </div>
                    <div>
                        <button>Comentarios</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
