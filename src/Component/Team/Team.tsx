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
            <div className="team-members-founder-profile-pic-container">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQF1p1jw4KP5RQ/profile-displayphoto-shrink_200_200/0/1590163254048?e=1707350400&v=beta&t=SlCjnsYeTKKDhYUGidJAmzH919l2cUFFpN-VU2loM4o"
                alt=""
              />
            </div>
            <div className="team-members-founder-name">Rémi Blaise</div>
            <div className="team-member-founder-job-container">
              <div className="team-members-founder-job">Fondateur</div>
            </div>
          </div>
          <div className="team-members-founders-description">
            Rémi a la vision d’un produit pensé pour les utilisateurs, par les
            utilisateurs. Avec une conviction forte : si la blockchain est
            encore austère et abstraite, ce n’est pas une fatalité ! Développeur
            web depuis le jeune âge, ingénieur, passionné par les startups et la
            blockchain, cette problèmatique encore; non résolue, est sa
            principale mission.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
