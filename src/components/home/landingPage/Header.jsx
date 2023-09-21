import { Image, Button, Link } from "@nextui-org/react";

export const Header = () => {
    return (
        <header className="flex flex-row justify-between">
            <div id="header-cont-img" className="m-3 mx-20">
                <Image src="/logo_campus.png" height={100} width={100} alt="" />
            </div>
            <div
                id="header-cont-a"
                className="m-3 mx-20 text-center flex items-center"
            >
                <Button
                    className={"bg-red-600"}
                    href="#"
                    as={Link}
                    color="danger"
                    variant="shadow"
                >
                    Iniciar sesión
                </Button>
            </div>
        </header>
    );
};
