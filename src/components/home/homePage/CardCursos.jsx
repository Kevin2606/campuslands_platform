import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";


export const CardCursos = ({nameCourse, description, patch, srcImg}) => {
    /* flex flex-col items-center border p-10 w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-2/5 */
    return (
        <div className="flex flex-col items-center border p-10 gap-5 lg:w-1/3 ">
            <h1 className="w-full text-center text-2xl font-medium">{nameCourse}</h1>
            <div>
                <p className="text-lg">{description}</p>
            </div>
            <div>
                <Link to={patch}>
                    <Button color="warning">Ver</Button>
                </Link>
            </div>
        </div>
    );
};
