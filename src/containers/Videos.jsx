import { Card } from "@nextui-org/react";
import { Navigator } from "../components/navigator/Navigator";
import { CardComentarios } from "../components/videos/CardComentarios";
import { Accordion, AccordionItem } from "@nextui-org/react";

export const Videos = () => {
    const defaultContent =
        "lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    return (
        <>
            <section className="bg-[#222831]">
                <Navigator />
                <div className="flex flex-col gap-8 py-10 lg:p-5 xl:p-10">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 items-stretch">
                        <div className="flex flex-col gap-5 w-fit lg:w-9/12">
                            <div>
                                <img
                                    className="lg:rounded-xl"
                                    src="https://placehold.co/1280x720"
                                    alt=""
                                    height="100%"
                                    width="100%"
                                />
                            </div>
                            <h1 className="text-3xl pl-2">Titulo video</h1>
                        </div>
                        <div className="border-[#666] border-y-1 max-h-56 lg:border-x-1 lg:rounded-xl lg:flex-1 lg:max-h-[26rem] xl:max-h-[31.5rem] 2xl:max-h-[38.5rem] overflow-y-scroll">
                            <Accordion>
                                <AccordionItem
                                    key="1"
                                    aria-label="Accordion 1"
                                    title="Accordion 1"
                                >
                                    {defaultContent}
                                </AccordionItem>
                                <AccordionItem
                                    key="2"
                                    aria-label="Accordion 2"
                                    title="Accordion 2"
                                >
                                    {defaultContent}
                                </AccordionItem>
                                <AccordionItem
                                    key="3"
                                    aria-label="Accordion 3"
                                    title="Accordion 3"
                                >
                                    {defaultContent}
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    {/* Seccion comentarios */}
                    {/* Componente comentarios */}
                    <CardComentarios />
                </div>
            </section>
        </>
    );
};
