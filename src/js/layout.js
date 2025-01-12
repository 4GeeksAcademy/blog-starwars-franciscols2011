import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { HomePage } from "./views/HomePage.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { CharactersPage } from "./views/CharactersPage.jsx";
import { PlanetDetails } from "./views/PlanetDetails.jsx";
import { StarshipDetails } from "./views/StarshipDetails.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/people/:idContact" element={<CharactersPage />} />
            <Route path="/planet/:idContact" element={<PlanetDetails />} />
            <Route path="/starship/:idContact" element={<StarshipDetails />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
