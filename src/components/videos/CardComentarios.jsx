import { Button } from "@nextui-org/react";

const SvgLikeComponent = () => {
    return (
        <svg
            className="icon icon-tabler icon-tabler-thumb-up"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M7 11v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-7a1 1 0 011-1h3a4 4 0 004-4V6a2 2 0 014 0v5h3a2 2 0 012 2l-1 5a2 3 0 01-2 2h-7a3 3 0 01-3-3" />
        </svg>
    );
};


export const CardComentarios = ({
    autor = {
        fullname: "Kevin Andres Gallardo Robles",
        avatar: "https://placehold.co/150",
    },
    comentario = `Lorem ipsum dolor sit, amet consectetur adipisicing
elit. Quod laborum placeat, soluta porro consectetur
quae odio consequatur iure quasi odit ad ea! Tempora,
illum! Molestiae voluptatibus pariatur maxime in, saepe
aperiam laudantium tempora culpa optio, voluptas
quibusdam at nostrum excepturi magnam repudiandae omnis
cupiditate eum exercitationem minus sequi veritatis! Ad
eveniet ducimus quidem fugiat facere, fugit explicabo,
repellendus assumenda eum cum aspernatur tempore illum
magni!`,
    createdAt = "DD/MM/AAAA",
}) => {
    return (
        <div className="p-2 px-3">
            <div className="flex flex-row gap-5 flex-nowrap ">
                <div className="w-20 flex-shrink-0 ">
                    <img
                        className="rounded-full"
                        src={autor.avatar}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="flex flex-col gap-2 ">
                    <div className="flex flex-col gap-2 bg-[#b8b7b7] text-black p-3 rounded-lg">
                        <h2 className="font-medium text-lg">{autor.fullname}</h2>
                        <p className="text-lg font-light ">{comentario}</p>
                    </div>
                    <div className="w-fit flex flex-row items-center gap-3 flex-wrap">
                        <Button color="warning" variant="solid">
                            <SvgLikeComponent />
                        </Button>
                        <Button color="warning" variant="bordered">
                            <p>Comentar</p>
                        </Button>
                        <p className="font-extralight">{createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
