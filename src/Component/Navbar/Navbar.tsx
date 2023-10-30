import React from "react";
import "./Navbar.css";
// import betterScanLogoText from '../../betterScanLogoText'
import BetterScanLogo from "../../betterScanLogo.tsx";
import BetterScanLogoText from "../../betterScanLogoText.tsx";
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <BetterScanLogo />
        <BetterScanLogoText />
      </div>
      <div className="navbar-langage-cta-container">
      <button className="navbar-cta">M'avertir de la sortie</button>
      </div>
    </div>
  );
}

export default Navbar;
