import { Input, Button, Image } from "@nextui-org/react";
import { MailIcon } from "./MailIcon.jsx";
import { CardAudio } from "./CardAudio/CardAudio.jsx";

export const MainTop = () => {
    const listLang = [
        "/javascript.png",
        "/React.png",
        "/GIT.png",
        "/Node.png",
        "/Csharp.png",
        "/PHP.png",
        "/Vue.png",
    ];

    return (
        <>
            <section
                id="main-top"
                className="flex flex-col gap-y-5 text-center items-center mt-32"
            >
                <div className="flex flex-col gap-y-5">
                    <h1 className="text-6xl">Campuslands Platform</h1>
                    <p className="text-2xl">
                        Plataforma de aprendizaje en línea
                    </p>
                </div>
                <div className="flex flex-col gap-y-5">
                    <p className="text-2xl">
                        Empieza a aprender ya. <strong>¡¿Que esperas?!</strong>
                    </p>
                    <div className="flex flex-row justify-center">
                        <Input
                            className="w-full rounded-l-lg"
                            radius="none"
                            size="md"
                            type="email"
                            label="Correo"
                            placeholder="usuario@correo.com"
                            endContent={
                                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                        />
                        <Button
                            className="bg-red-600 h-auto rounded-r-lg"
                            radius="none"
                        >
                            Empezar
                        </Button>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <CardAudio
                        imgConfig={{
                            srcImg: "/javascript.png",
                            altImg: "JavaScript",
                            heightImg: 150,
                        }}
                        srcAudio="/halo.mp3"
                        textHeader="Fundamentos de JavaScript"
                    />
                </div>
                <div className="grid grid-cols-7 grid-rows-2 gap-x-10 gap-y-5 items-center">
                    <Image
                        isZoomed
                        removeWrapper
                        src={listLang[0]}
                        alt=""
                        height={100}
                        width={100}
                        classNames={{
                            img: `col-start-1 row-start-1 rounded-lg`,
                            
                        }}
                    />
                    <Image
                        isZoomed
                        removeWrapper
                        src={listLang[1]}
                        alt=""
                        height={100}
                        width={100}
                        classNames={{
                            img: `col-start-2 row-start-2 rounded-lg`,
                        }}
                    />
                    <Image
                        isZoomed
                        removeWrapper
                        src={listLang[2]}
                        alt=""
                        height={100}
                        width={100}
                        classNames={{
                            img: `col-start-3 row-start-1 rounded-lg`,
                        }}
                    />
                    <Image
                        isZoomed
                        removeWrapper
                        src={listLang[3]}
                        alt=""
                        height={100}
                        width={100}
                        classNames={{
                            img: `col-start-4 row-start-2 rounded-lg`,
                        }}
                    />
                    <Image
                        isZoomed
                        removeWrapper
                        src={listLang[4]}
                        alt=""
                        height={100}
                        width={100}
                        classNames={{
                            img: `col-start-5 row-start-1 rounded-lg`,
                        }}
                    />
                    <Image
                        isZoomed
                        removeWrapper
                        src={listLang[5]}
                        alt=""
                        height={100}
                        width={100}
                        classNames={{
                            img: `col-start-6 row-start-2 rounded-lg`,
                        }}
                    />
                    <Image
                        isZoomed
                        removeWrapper
                        src={listLang[6]}
                        alt=""
                        height={100}
                        width={100}
                        classNames={{
                            img: `col-start-7 row-start-1 rounded-lg`,
                        }}
                    />
                </div>
            </section>
        </>
    );
};
