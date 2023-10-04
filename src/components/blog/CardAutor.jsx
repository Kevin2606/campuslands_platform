import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
} from "@nextui-org/react";
export const CardAutor = ({ avatar, fullname, username, roles, createdAt }) => {
    /* w-[1250px] */
    return (
        <>
            <div className="flex flex-row  items-center justify-between">
                <div className="flex flex-row gap-10">
                    {/* h-28 w-28 */}
                    <div className="w-20">
                        <img
                            className="rounded-full"
                            height="100%"
                            width="100%"
                            src={avatar}
                            alt="Imagen Autor"
                        />
                    </div>
                    <div className="flex flex-col justify-evenly gap-3">
                        <h2 className="text-xl">{fullname}</h2>
                        <div className="flex flex-row gap-2 items-center">
                            <Popover placement="bottom" color="warning">
                                <PopoverTrigger>
                                    <Button color="warning">Roles</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className="flex flex-row flex-wrap gap-3 p-2">
                                        {roles.map((role, index) => (
                                            <p
                                                className="text-center h-fit text-sm text-white bg-[#393e468c] rounded-full px-2 py-1"
                                                key={index}
                                            >
                                                {role}
                                            </p>
                                        ))}
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-light">
                    <span className="text-xl font-extralight">Blog creado: </span>
                    {createdAt}
                </p>
            </div>
        </>
    );
};
