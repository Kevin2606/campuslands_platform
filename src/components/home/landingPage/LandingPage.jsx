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
            <div className="flex flex-col gap-20 bg-[#222831]">
                <main>
                    <div
                        className="bg-cover bg-center bg-no-repeat xl:h-screen w-full"
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
