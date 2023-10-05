import React from "react";
import { Navigator } from "../components/navigator/Navigator";
import { CardAutor } from "../components/blog/CardAutor";
import { CardComentarios } from "../components/videos/CardComentarios";

export const BlogDetail = ({
    title = "Titulo",
    imageUrl = "https://placehold.co/1250x450",
    content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore consequuntur eligendi doloribus! Mollitia earum, natus eveniet maxime nam harum, ipsum sit, sed vel quibusdam cupiditate unde consequatur suscipit! Dolor incidunt asperiores necessitatibus nulla ex nisi, dolores atque fuga nostrum tempore sequi voluptas tempora repudiandae commodi sunt voluptates deleniti? Modi vel quod perferendis laboriosam libero illo maiores beatae! Pariatur laudantium voluptatem magni harum ducimus unde ipsam totam non quia voluptas magnam cum nam reiciendis aliquam, enim repudiandae molestiae commodi possimus animi suscipit iure. Molestiae, illo iste cupiditate saepe quaerat excepturi? Quod eaque, vel obcaecati expedita quasi eveniet, aut ducimus incidunt corrupti modi repudiandae, distinctio esse sit placeat. Omnis aliquam quae quam, numquam, doloribus quas ex corrupti amet officia enim sequi perspiciatis, adipisci dolore eius dolor aspernatur exercitationem porro reiciendis natus. Vitae illo vero id voluptate quisquam autem nostrum maxime, quod error sapiente qui est corporis nihil perferendis obcaecati fugit. Eius reprehenderit fugiat, unde reiciendis, aspernatur sunt repellat odit consectetur veniam exercitationem blanditiis itaque neque. Accusamus expedita facilis ad atque aut eum optio illum reiciendis, voluptatem repellat debitis quae modi id ipsum labore porro culpa mollitia explicabo soluta. Ipsum sint, consequuntur tempora animi natus aut soluta provident vitae odio illo! Numquam, fuga maiores vitae suscipit tempora maxime recusandae ducimus minima fugit quos eius ipsa unde voluptatum tenetur placeat cumque nostrum soluta, harum quasi ipsam distinctio error! Mollitia, dignissimos! Recusandae dicta nostrum assumenda possimus voluptatibus ipsam, voluptas, unde illum maiores repellendus similique. Odit, dolor provident cum fugit eligendi mollitia ullam voluptas aperiam dolore quas nostrum, magnam sed repellat aut dicta ut cupiditate doloremque, excepturi non! Hic ullam commodi itaque odio? Exercitationem distinctio illum tenetur velit quas aliquam necessitatibus doloremque a illo esse quae, sit inventore enim praesentium autem modi at provident quo nemo rerum. Cum saepe beatae libero temporibus a molestias, dolorum voluptatibus.`,
    autor = {
        fullname: "Kevin Andres Gallardo Robles",
        avatar: "https://placehold.co/200",
        roles: ["Camper", "Gran Maestro", "Moderador"],
    },
    createdAt = "DD/MM/YYYY",
    imageBackground = "/HRSC-323L.png",
}) => {
    return (
        <>
            <Navigator />
            <div
                className="bg-cover bg-center bg-no-repeat w-screen h-20 lg:h-60 xl:h-72 2xl:h-96 lg:border-b-5 lg:border-warning-600  absolute top-0 z-10"
                style={{
                    backgroundImage: `url(${imageBackground})`,
                }}
            ></div>
            <section className="bg-[#222831]">
                {/* h-[350px] w-[2080px] absolute top-0 -z-10 */}
                {/* w-[1250px] h-[350] */}
                <div className="flex flex-row justify-center lg:pt-10">
                    <div className="lg:w-3/4 relative z-20">
                        <img width="100%" src={imageUrl} alt="Imagen del blog" />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10 p-5 pt-10 lg:px-36">
                    <h1 className="text-4xl">{title}</h1>
                    <p>{content}</p>
                    <CardAutor {...autor} createdAt={createdAt} />
                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-medium border-b-1 pb-3">Comentarios</h2>
                        <CardComentarios />
                        <CardComentarios />
                        <CardComentarios />

                    </div>
                </div>
            </section>
        </>
    );
};
