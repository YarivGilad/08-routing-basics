import { Routes, Route } from "react-router-dom";

import {TopBar} from "./topBar";

// content `pages`
import { Home as HomePage } from "./content/home";
import { About as AboutPage } from "./content/about";
import { Contact as ContactPage } from "./content/contact";
import { NoMatch } from "./content/404";

// navigation
import { Links } from "./links";

export const App = () => (
    <>
        <div>
            <TopBar>
                <Links />
            </TopBar>
        </div>
        <Routes>
            <Route path="*" element={<NoMatch />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </>
);

