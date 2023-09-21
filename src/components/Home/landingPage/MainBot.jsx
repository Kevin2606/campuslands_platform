import "../../../assets/css/LandingPage.css"

export const MainBot = () => {
    return (
        <>
            <div className="mt-12 flex flex-row justify-around items-center ">
                <div>
                    <img className="img-animacion3" src="/rocket.png" height={350} width={350} alt="" />
                </div> 
                <div>
                    <h1 className="text-4xl font-black">Campuslands</h1>
                    <p className="w-96 text-lg font-medium text-ellipsis">
                        Lorem ipsum dolor sit amet cons ectetur adipi sicing
                        elit. Quisquam, quos.Lorem ipsum dolor sit amet cons ectetur adipi sicing
                        elit. Quisquam, quos.Lorem ipsum dolor sit amet cons ectetur adipi sicing
                        elit. Quisquam, quos.
                    </p>
                </div>
            </div>
        </>
    );
};
