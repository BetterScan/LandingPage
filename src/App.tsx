import React from "react";
import "./App.css";
import LandingPrincipal from "./Component/LandingPrincipal/LandingPrincipal.tsx";
import FeaturesPresentation from "./Component/FeaturesPresentation/FeaturesPresentation.tsx";
import Navbar from "./Component/Navbar/Navbar.tsx";
import Partners from "./Component/Partners/Partners.tsx";
import ProductOverview from "./Component/ProductOverview/ProductOverview.tsx";
// import { slide as Menu } from "react-burger-menu";
function App() {
  return (
    <>
      <div className="landing-page-container">
        <div className="landing-page-wrap">
          <Navbar />
          <LandingPrincipal />
          <FeaturesPresentation />
          <Partners />
          <ProductOverview />
          {/* <Menu width={"280px"}>
        <button className="navbar-cta-button-side-menu">
        M'avertir de la sortie
        </button>
      </Menu> */}
        </div>
      </div>
      <div className="error-message-display-to-small">
        Oops veuillez passer sur un écran plus grand ( 👀 📱 💻 )
      </div>
    </>
  );
}

export default App;
