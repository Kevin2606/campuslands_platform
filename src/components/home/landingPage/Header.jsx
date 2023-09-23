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
                    href="https://discord.com/api/oauth2/authorize?client_id=1153561028077027349&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth%2Fcallback&response_type=code&scope=identify%20guilds%20guilds.members.read%20email"
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
