import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../containers/Home";
import { Auth } from "../containers/Auth";
import { Courses } from "../containers/Courses";
import { Blog } from "../containers/Blog";
import { Videos } from "../containers/Videos";
import { Profile } from "../containers/Profile";
import { BlogDetail } from "../containers/BlogDetail";
import { PrivateRoutes } from "./PrivateRoutes";
//import { PublicRoutes } from "./PublicRoutes";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth/callback" element={<Auth />} />
                <Route path="/courses" element={<PrivateRoutes Component={<Courses />} />} />
                <Route path="/blog" element={<PrivateRoutes Component={<Blog />} />} />
                <Route path="/blog/:title" element={<PrivateRoutes Component={<BlogDetail />} />} />
                <Route path="/videos/:name_curso" element={<PrivateRoutes Component={<Videos />} />} />
                <Route path="/profile" element={<PrivateRoutes Component={<Profile />} />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
