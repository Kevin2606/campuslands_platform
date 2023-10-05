import { Card, CardBody, CardHeader } from "@nextui-org/react";
import "../../../assets/css/LandingPage.css"

export const MainMid = () => {
    return (
        <>
            <div className="pb-16 relative triangulo grid grid-cols-3 gap-4 bg-gray-100 h-96 items-center justify-center">
                <Card classNames={{
                    base: "bg-transparent text-black",
                    header: "text-xl text-center justify-center items-center font-black",
                    body: "text-center justify-center items-center text-lg",
                }}
                shadow="none"
                >
                    <CardHeader>
                        <h1>Aprende 24/7</h1>
                    </CardHeader>
                    <CardBody>
                        <p>Accede a los cursos desde cualquier dispositivo</p>
                    </CardBody>
                </Card>
                <Card classNames={{
                    base: "bg-transparent text-black",
                    header: "text-xl text-center justify-center items-center font-black",
                    body: "text-center justify-center items-center text-lg",
                }}
                shadow="none">
                    <CardHeader>
                        <h1>Comunidad</h1>
                    </CardHeader>
                    <CardBody>
                        <p>Accede a los cursos desde cualquier dispositivo</p>
                    </CardBody>
                </Card>
                <Card classNames={{
                    base: "bg-transparent text-black",
                    header: "text-xl text-center justify-center items-center font-black",
                    body: "text-center justify-center items-center text-lg",
                }}
                shadow="none">
                    <CardHeader>
                        <h1>Impacta</h1>
                    </CardHeader>
                    <CardBody>
                        <p>Accede a los cursos desde cualquier dispositivo</p>
                    </CardBody>
                </Card>
            </div>
            <div className="w-full flex justify-center items-center mb-24">
                <div className="w-fit">
                    <img src="https://placehold.co/800x400.png" alt="" />
                </div>
            </div>
        </>
    );
};
