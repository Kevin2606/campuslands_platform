
export const CardAutor = ({ avatar, fullname, username, roles, createdAt }) => {
    return (
        <div className="flex flex-row w-[1250px] items-center justify-between">
            <div className="flex flex-row gap-10">
                <div className="h-28 w-28">
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
                    <div className="flex flex-row items-center gap-5">
                        <h3 className="text-lg">{username}</h3>
                        <div className="flex flex-row gap-2">
                            {roles.map((role, index) => (
                                <p
                                    className="text-sm rounded-full p-1 pl-2 pr-2 bg-orange-400"
                                    key={index}
                                >
                                    {role}
                                </p>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
            <div>
                <span>Fecha de creación: </span>
                {createdAt}
            </div>
        </div>
    );
};
