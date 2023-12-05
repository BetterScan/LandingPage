import React from "react";
import "./CommunityParticipation.css";
import questionnaireImage from "../../Assets/questionnaire.svg";
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
        </div>
        <div className="community-participation-telegram-container"></div>
      </div>
    </div>
  );
}

export default CommunityParticipation;
