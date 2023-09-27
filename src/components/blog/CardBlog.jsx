import { Link } from "react-router-dom";

export const CardBlog = ({
    paramUrl = "titulo",
    title = "Titulo",
    description = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nesciunt repudiandae possimus, doloribus labore id similique
    dignissimos vitae`,
    imageUrl = "https://placehold.co/300x225",
    altImg = "Imagen del blog",
}) => {
    return (
        <Link to={`/blog/${paramUrl}`}>
            <div className="w-72 h-96 flex flex-col flex-nowrap gap-5">
                <img src={imageUrl} alt={altImg} />
                <h1 className="text-2xl">{title}</h1>
                <p className="text-lg line-clamp-3">{description}</p>
            </div>
        </Link>
    );
};

/*
        <Link to={`"/blog/${title}"`}>
            <div className="w-72 h-96 flex flex-col flex-nowrap gap-5">
                <img src="https://placehold.co/300x225" alt="" />
                <h1 className="text-2xl">Titulo</h1>
                <p className="text-lg line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt repudiandae possimus, doloribus labore id similique
                    dignissimos vitae
                </p>
            </div>
        </Link>


*/
