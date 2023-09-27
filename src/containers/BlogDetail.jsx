import React from "react";
import { Navigator } from "../components/navigator/Navigator";
import { CardAutor } from "../components/blog/CardAutor";

export const BlogDetail = ({
    title = "Titulo",
    description = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nesciunt repudiandae possimus, doloribus labore id similique
    dignissimos vitae`,
    imageUrl = "https://placehold.co/1250x350",
    altImg = "Imagen del blog",
    content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore consequuntur eligendi doloribus! Mollitia earum, natus eveniet maxime nam harum, ipsum sit, sed vel quibusdam cupiditate unde consequatur suscipit! Dolor incidunt asperiores necessitatibus nulla ex nisi, dolores atque fuga nostrum tempore sequi voluptas tempora repudiandae commodi sunt voluptates deleniti? Modi vel quod perferendis laboriosam libero illo maiores beatae! Pariatur laudantium voluptatem magni harum ducimus unde ipsam totam non quia voluptas magnam cum nam reiciendis aliquam, enim repudiandae molestiae commodi possimus animi suscipit iure. Molestiae, illo iste cupiditate saepe quaerat excepturi? Quod eaque, vel obcaecati expedita quasi eveniet, aut ducimus incidunt corrupti modi repudiandae, distinctio esse sit placeat. Omnis aliquam quae quam, numquam, doloribus quas ex corrupti amet officia enim sequi perspiciatis, adipisci dolore eius dolor aspernatur exercitationem porro reiciendis natus. Vitae illo vero id voluptate quisquam autem nostrum maxime, quod error sapiente qui est corporis nihil perferendis obcaecati fugit. Eius reprehenderit fugiat, unde reiciendis, aspernatur sunt repellat odit consectetur veniam exercitationem blanditiis itaque neque. Accusamus expedita facilis ad atque aut eum optio illum reiciendis, voluptatem repellat debitis quae modi id ipsum labore porro culpa mollitia explicabo soluta. Ipsum sint, consequuntur tempora animi natus aut soluta provident vitae odio illo! Numquam, fuga maiores vitae suscipit tempora maxime recusandae ducimus minima fugit quos eius ipsa unde voluptatum tenetur placeat cumque nostrum soluta, harum quasi ipsam distinctio error! Mollitia, dignissimos! Recusandae dicta nostrum assumenda possimus voluptatibus ipsam, voluptas, unde illum maiores repellendus similique. Odit, dolor provident cum fugit eligendi mollitia ullam voluptas aperiam dolore quas nostrum, magnam sed repellat aut dicta ut cupiditate doloremque, excepturi non! Hic ullam commodi itaque odio? Exercitationem distinctio illum tenetur velit quas aliquam necessitatibus doloremque a illo esse quae, sit inventore enim praesentium autem modi at provident quo nemo rerum. Cum saepe beatae libero temporibus a molestias, dolorum voluptatibus.`,
    autor = {
        fullname: "Nombre Completo",
        username: "@Usuario",
        avatar: "https://placehold.co/200",
        roles: ["Camper", "Gran Maestro", "Moderador"],
    },
    createdAt = "2021-10-10T12:00:00.000Z",
    imageBackground = "https://placehold.co/2080x350",
    comments = "idListComment",
}) => {
    return (
        <>
            <Navigator />
            <section>
                <div className="h-[350px] w-[2080px] absolute top-0 -z-10">
                    <img
                        src={imageBackground}
                        height="100%"
                        width="100%"
                        alt="Imagen de fondo"
                    />
                </div>
                <div className="flex flex-col items-center gap-10">
                    <div className="w-[1250px] h-[350]">
                        <img height="100%" width="100%" src={imageUrl} alt={altImg} />
                    </div>
                    <h1 className="text-6xl">{title}</h1>
                    <p className="w-[1250px]">{content}</p>
                    <CardAutor {...autor} createdAt={createdAt} />
                </div>
            </section>
        </>
    );
};
