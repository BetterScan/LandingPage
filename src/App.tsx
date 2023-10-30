import React from "react";
import "./App.css";
import LandingPrincipal from "./Component/LandingPrincipal/LandingPrincipal.tsx";
import FeaturesPresentation from "./Component/FeaturesPresentation/FeaturesPresentation.tsx";
import Navbar from "./Component/Navbar/Navbar.tsx";
function App() {
  return (
    <div className="landing-page-container">
      <div className="landing-page-wrap">
        <Navbar /> 
        <LandingPrincipal />
        <FeaturesPresentation />
      </div>
    </div>
  );
}

export default App;
