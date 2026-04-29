import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Games from "../pages/Games";
import Contact from "../pages/Contact";
import GamesINSOMNIA from "../pages/games/INSOMNIA";
import NotFound from "../pages/NotFound";

export default function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/games" element={<Games />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/games/INSOMNIA" element={<GamesINSOMNIA />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )    
}