import { Divider } from "@nextui-org/react";
import "../../../assets/css/LandingPage.css"
import { Header } from "./Header";
import { MainTop } from "./MainTop";
import { MainMid } from "./MainMid";
import { MainBot } from "./MainBot";
import { Footer } from "./Footer";

export const LandingPage = () => {
    return (
        <>
            <img
                src="/blob.svg"
                className="img-animacion2 absolute top-32 right-44"
                height={600}
                width={600}
            />
            <img
                src="/blob-1.svg"
                className="img-xxx absolute top-32"
                height={600}
                width={600}
                alt=""
            />
            <div className="flex flex-col gap-20">
                <main>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen w-full"
                        style={{
                            backgroundImage: "url(/background_top.jpg)",
                        }}
                    >
                        <Header />
                        <MainTop />
                    </div>
                    <section id="main-mid">
                        <MainMid />
                    </section>
                    <Divider />
                    <section id="main-bot">
                        <MainBot />
                    </section>
                </main>
                <Divider />
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};
