import React from "react";
import "./CommunityParticipation.css";
import questionnaireImage from "../../Assets/questionnaire.svg";
import telegramChatImage from "../../Assets/telegram-chat-screen.png";
import fileCheckLogo from "../../Assets/file-check-logo.svg";
import telegramWhiteLogo from "../../Assets/telegram-logo-white.svg";
function CommunityParticipation() {
  return (
    <div className="community-participation-container">
      <div className="community-participation-title-and-container">
        <div className="community-participation-title">
          Participe à la construction de
          <span>BetterScan</span>
        </div>
        <div className="community-participation-description">
          Lorem ipsum dolor sit amet consectetur. Arcu ultricies condimentum
          venenatis turpis parturient nisl sed
        </div>
      </div>
      <div className="community-participation-bloc-container">
        <div className="community-participation-questionnaire-container">
          <div className="community-participation-questionnaire-title">
            Donne ton avis en 2 minutes !
          </div>
          <div className="community-participation-questionnaire-description">
            Lorem ipsum dolor u tendamas dolor u tendamas lorem ipsum dolor u
            tendamas dolor.
          </div>
          <div className="community-participation-questionnaire-image-container">
            <img src={questionnaireImage} alt="questionnaire" />
          </div>
          <button className="community-participation-questionnaire-button">
            Remplir le questionnaire
            <img src={fileCheckLogo} alt="questionnaire logo" />
          </button>
        </div>
        <div className="community-participation-telegram-container">
          <div className="community-participation-telegram-title">
            Rejoins-nous sur Telegram !
          </div>
          <div className="community-participation-telegram-description">
            Lorem ipsum dolor u tendamas dolor u tendamas lorem ipsum dolor u
            tendamas dolor.
          </div>
          <div className="community-participation-telegram-image-container">
            <img src={telegramChatImage} alt="telegram" />
          </div>
          <button className="community-participation-telegram-button">
            Rejoins-nous sur Telegram
            <img src={telegramWhiteLogo} alt="telegram logo" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommunityParticipation;
