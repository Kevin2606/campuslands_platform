import { Link } from "react-router-dom";

export const CardCursos = ({nameCourse, description, patch, srcImg}) => {
    return (
        <div className="flex flex-col items-center border p-10 w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-2/5">
            <h1 className="w-full text-center">{nameCourse}</h1>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <Link to={patch}>
                    <button>Ver</button>
                </Link>
            </div>
        </div>
    );
};
