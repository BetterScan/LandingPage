import React from "react";
import twitterLogo from "../../Assets/Twitter.svg";
import telegramLogo from "../../Assets/Telegram.svg";
import linkedinLogo from "../../Assets/LinkedIn.svg";
import explorerScreenShot from "../../Assets/explorer-screenshot.png"
import backgroundLandingPrincipal from "../../Assets/background-landing-principal.svg"
import "./LandingPrincipal.css";
function LandingPrincipal() {
  return (
    <div className="landing-principal-container">
      <div className="landing-principal-bloc-description-container">
        <div className="landing-principal-bloc-description-title">
          <div className="landing-principal-bloc-description-title-first-part">
            Plus simple, votre nouvel explorateur de
            <span className="landing-principal-bloc-description-title-transaction">
              transaction
            </span>
          </div>
        </div>
        <div className="landing-principal-bloc-description-text">
          <p>
            L'explorateur de blockchain next-gen accessible à tous. Facile et
            compréhensible, terminé les prises de tête.
          </p>
          <p>Vos portefeuilles et transactions en un coup d'oeil.</p>
        </div>
        <div className="landing-principal-bloc-description-socials">
          <div className="landing-principal-bloc-description-socials-title">
            Follow us
          </div>
          <div>
            <a target="_blank" href="https://twitter.com/TheBetterScan">
              <img src={twitterLogo} alt="twitter logo" />
            </a>
            <a target="_blank" href="https://t.me/+6fxEnCSHII01M">
              <img src={telegramLogo} alt="telegram logo" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/betterscan/"
            >
              <img src={linkedinLogo} alt="linkedin logo" />
            </a>
          </div>
        </div>
        <div className="landing-principal-bloc-cta-buttons-container">
          <button className="landing-principal-bloc-cta-discover-button">
            <p>Découvrir</p>
          </button>
          <button className="landing-principal-bloc-cta-whitepaper-button">
            <p>Whitepaper</p>
          </button>
        </div>
      </div>
      <div className="landing-principal-screenshot-explorer-container">
        <img src={explorerScreenShot} alt="explorer screenshot" />
      </div>
    </div>
  );
}

export default LandingPrincipal;
