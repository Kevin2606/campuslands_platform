import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

export const CardCursos = ({ nameCourse, description, patch, srcImg }) => {
    /* flex flex-col items-center border p-10 w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-2/5 */
    const navigate = useNavigate();
    const pressButton = () => {
        navigate(patch);
    };

    return (
        <>
            <div className="flex flex-col items-center border p-10 gap-5 lg:w-1/3 ">
                <div>
                    <img src={srcImg} alt="" />
                </div>
                <h1 className="w-full text-center text-2xl font-medium">
                    {nameCourse}
                </h1>
                <div>
                    <p className="text-lg">{description}</p>
                </div>
                <div>
                    <Button color="warning" onPress={pressButton}>
                        Ver
                    </Button>
                </div>
            </div>
        </>
    );
};
