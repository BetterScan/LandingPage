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
        <div className="team-members-developer-container">
          <div className="team-members-profile-pic-and-name-and-job">
            <div className="team-member-profile-pic-line-up-connection"></div>
            <div className="team-members-developer-profile-pic-container">
              <img
                src="https://media.licdn.com/dms/image/D5603AQE6JEj2mAjSiA/profile-displayphoto-shrink_800_800/0/1695207690384?e=1707350400&v=beta&t=Qt8QLSPP552I8ruPjqw1TvAiWT4ghQTqE-BcKtjnW48"
                alt=""
              />
            </div>
            <div className="team-members-developer-name">Rémi Blaise</div>
            <div className="team-member-developer-job-container">
              <div className="team-members-developer-job">Designer UI/UX</div>
            </div>
          </div>
          <div className="team-members-developers-description">
            La conception est le coeur de travail de l’équipe BetterScan. Pour
            eux, la perfection de l'expérience utilisateur passe par la
            réflexion minutieuse de chaque détail.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
