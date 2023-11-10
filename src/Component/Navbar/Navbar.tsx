import React from "react";
import "./Navbar.css";
// import betterScanLogoText from '../../betterScanLogoText'
import BetterScanLogo from "../../betterScanLogo.tsx";
import BetterScanLogoText from "../../betterScanLogoText.tsx";
// import FrenchFlagLogo from "../../Assets/FrenchFlagLogo.tsx";
import ReactCountryFlag from "react-country-flag";
import arrowBottom from "../../Assets/arrow-bottom.png";
function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrap">
          <div className="navbar-logo-container">
            <BetterScanLogo />
            <BetterScanLogoText />
          </div>
          <div className="navbar-langage-cta-container">
            <div className="navbar-langage">
              <ReactCountryFlag countryCode="FR" svg />
              Français
              <img src={arrowBottom} alt="" />
            </div>
            <button className="navbar-cta-button">
              M'avertir de la sortie
            </button>
          </div>
        </div>
        <div className="navbar-separation-line"></div>
      </div>
    </>
  );
}

export default Navbar;
