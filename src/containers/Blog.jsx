import { Navigator } from "../components/navigator/Navigator";
import { CardBlog } from "../components/blog/CardBlog";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const uriServer = import.meta.env.VITE_URI_SERVER_BACKEND

const SvgVerMas = () => {
    return (
        <svg
            className="icon icon-tabler icon-tabler-arrow-big-right-line"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M12 9V5.414a1 1 0 011.707-.707l6.586 6.586a1 1 0 010 1.414l-6.586 6.586A1 1 0 0112 18.586V15H6V9h6zM3 9v6" />
        </svg>
    );
};

export const Blog = () => {
    
    const navigate = useNavigate();
    const handleCreateBlog = () => {
        navigate("/blog/new");
    };
    const [blogs, setBlogs] = useState([]);
    const getBlogs = async () => {
        const result = await fetch(`${uriServer}/blogs`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await result.json();
        setBlogs(data);
    }
    useEffect(() => {
        getBlogs();
    }, []);
    return (
        <>
            <section className="bg-[#222831]">
                <Navigator />
                <div className="flex flex-col justify-around items-center h-96 border-b lg:flex-row">
                    <div className="flex flex-col gap-10">
                        <h1 className="text-4xl font-medium">
                            Bienvenido al blog
                        </h1>
                        <h2 className="text-2xl font-light">
                            Texto de lo que trata el blog
                        </h2>
                    </div>
                    <Button shadow color="warning" onPress={handleCreateBlog}>
                        Crear blog
                    </Button>
                </div>
                <div className="p-10 pr-0 w-screen overflow-hidden ">
                    <h1 className="p-5 pl-0 w-fit text-3xl">
                        Blogs mas recientes
                    </h1>
                    <div className="flex flex-row gap-14 overflow-y-auto pb-2">
                        {blogs.map((blog, index) => <CardBlog paramUrl={blog.title} key={index} {...blog} />)}
                        <div className="w-min h-96 flex justify-center items-center">
                            <Button
                                size="sm"
                                color="warning"
                                className="h-full text-2xl"
                            >
                                <SvgVerMas />
                            </Button>
                        </div>
                    </div>
                    {/*
                    
                    
                    
                    <h1 className="p-5 pt-10 pl-0 w-fit text-3xl">
                        Javascript
                    </h1>
                    <div className="flex flex-row gap-14 overflow-y-auto">
                        <CardBlog />
                        <CardBlog />
                        <CardBlog />
                        <CardBlog />
                        <CardBlog />
                        <div className="w-min h-96 flex justify-center items-center">
                            <Button
                                size="sm"
                                color="warning"
                                className="h-full font-medium"
                            >
                                <SvgVerMas />
                            </Button>
                        </div>
                    </div>
                */}
                </div>
            </section>
        </>
    );
};
