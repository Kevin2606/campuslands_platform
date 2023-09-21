import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LandingPage } from "../components/home/landingPage/LandingPage";

import { Home } from "../containers/Home";
import { Auth } from "../containers/Auth";
import { Courses } from "../containers/Courses";
import { Forum } from "../containers/Forum";
import { Videos } from "../containers/Videos";
import { Profile } from "../containers/Profile";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
