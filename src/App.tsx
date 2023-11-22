import React from "react";
import "./App.css";
import LandingPrincipal from "./Component/LandingPrincipal/LandingPrincipal.tsx";
import FeaturesPresentation from "./Component/FeaturesPresentation/FeaturesPresentation.tsx";
import Navbar from "./Component/Navbar/Navbar.tsx";
// import { slide as Menu } from "react-burger-menu"; 
function App() {
  return (
    <>
      <div className="landing-page-container">
        <div className="landing-page-wrap">
          <Navbar />
          <LandingPrincipal />
          <FeaturesPresentation />

          {/* <Menu width={"280px"}>
        <button className="navbar-cta-button-side-menu">
        M'avertir de la sortie
        </button>
      </Menu> */}
        </div>
      </div>
    </>
  );
}

export default App;
