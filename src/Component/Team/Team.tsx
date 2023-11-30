import React from "react";
import "./Team.css";
function Team() {
  return (
    <div className="team-container">
      <div className="team-title-and-description-container">
        <div className="team-title">
          La Team<span>BetterScan</span>
        </div>
        <div className="team-title-description">
          Lorem ipsum dolor sit amet consectetur. Arcu ultricies condimentum
          venenatis turpis parturient nisl sed
        </div>
      </div>
      <div className="team-members-bloc-container">
        <div className="team-members-founder-container">
          <div className="team-members-profile-pic-and-name-and-job">
            <div className="team-members-founder-profile-pic-container"></div>
            <div className="team-members-founder-name">Rémi Blaise</div>
            <div className="team-members-founder-job"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
