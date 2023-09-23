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
                <Route lazy={true} path="/" element={<LandingPage />} />
                <Route lazy={true} path="/home" element={<Home />} />
                <Route lazy={true} path="/auth/callback" element={<Auth />} />
                <Route lazy={true} path="/courses" element={<Courses />} />
                <Route lazy={true} path="/forum" element={<Forum />} />
                <Route lazy={true} path="/videos" element={<Videos />} />
                <Route lazy={true} path="/profile" element={<Profile />} />
                <Route lazy={true} path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
