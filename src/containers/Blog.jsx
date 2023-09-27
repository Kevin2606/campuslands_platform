import { Navigator } from "../components/navigator/Navigator";
import { CardBlog } from "../components/blog/CardBlog";

export const Blog = () => {
  return (
    <>
      <Navigator />
      <section>
        <div className="flex flex-row justify-around items-center h-96 border-b">
          <div className="flex flex-col gap-10">
            <h1 className="text-4xl">Bienvenido al blog</h1>
            <h2 className="text-2xl">Texto de lo que trata el blog</h2>          
          </div>
          <button>Crear hilo</button>
        </div>
        <div className="p-10">
          <h1 className="p-5 pl-0 w-fit text-3xl">Blogs mas recientes</h1>
          <div className="flex flex-row gap-16">
            <CardBlog title='prueba' paramUrl="prueba"  />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <div className="w-min h-96 flex justify-center bg-gray-500">
              <button>Ver mas</button>
            </div>
          </div>
          <h1 className="p-5 pt-10 pl-0 w-fit text-3xl">Javascript</h1>
          <div className="flex flex-row gap-16 ">
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <div className="w-min h-96 flex justify-center bg-gray-500">
              <button>Ver mas</button>
            </div>
          </div>
        </div>

      </section>
      

    </>
  )
}
