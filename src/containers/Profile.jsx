import { Navigator } from "../components/navigator/Navigator";

export const Profile = () => {
  return (
    <>
      <Navigator />
      <section className="w-full h-screen flex  justify-center items-center ">
        <div className="flex flex-col items-center justify-center">
          <div className="absolute top-[17rem] ">
            <img src="https://placehold.co/200" className="rounded-full" alt="" />
          </div>
          <div className="flex flex-col border p-5 pt-24 items-center gap-7 rounded-lg ">
            <h2 className="text-xl">@Usuario</h2>
            <h1 className="text-2xl">Nombre Completo</h1>
            <div className="flex flex-row flex-wrap gap-5 border p-5">
              <p>Camper</p>
              <p>Gran Maestro</p>
              <p>Moderador</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
