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
        <div className="team-members-designer-container">
          <div className="team-members-profile-pic-and-name-and-job">
            <div className="team-member-profile-pic-line-up-connection"></div>
            <div className="team-members-designer-profile-pic-container">
              <img
                src="https://media.licdn.com/dms/image/D5603AQE6JEj2mAjSiA/profile-displayphoto-shrink_800_800/0/1695207690384?e=1707350400&v=beta&t=Qt8QLSPP552I8ruPjqw1TvAiWT4ghQTqE-BcKtjnW48"
                alt=""
              />
            </div>
            <div className="team-members-designer-name">Stéphane Lafaye</div>
            <div className="team-member-designer-job-container">
              <div className="team-members-designer-job">Designer UI/UX</div>
            </div>
          </div>
          <div className="team-members-designer-description">
            La conception est le coeur de travail de l’équipe BetterScan. Pour
            eux, la perfection de l'expérience utilisateur passe par la
            réflexion minutieuse de chaque détail.
          </div>
        </div>
        <div className="team-members-developers-container">
          <div className="team-members-developers-member-container">
            <div className="team-members-profile-pic-and-name-and-job">
              <div className="team-member-profile-pic-line-up-connection"></div>
              <div className="team-members-developers-profile-pic-container">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/profile-pic-mathe-white.png?alt=media&token=4aa9dbca-b603-4d51-8dea-2bc1d3e4cc12"
                  alt=""
                />
              </div>
              <div className="team-members-developers-name">Mathéo Vallone</div>
              <div className="team-member-developers-job-container">
                <div className="team-members-developers-job">
                  Lead Developer
                </div>
              </div>
            </div>
            <div className="team-member-profile-pic-line-side-connection"></div>
            <div className="team-members-profile-pic-and-name-and-job-second">
              {/* <div className="team-member-profile-pic-line-up-connection"></div> */}
              <div className="team-members-developers-profile-pic-container">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/img-rami.jpg?alt=media&token=97ea8ada-3f93-4344-bca6-a95a2ba5a11b"
                  alt=""
                />
              </div>
              <div className="team-members-developers-name">Rami Abdou</div>
              <div className="team-member-developers-job-container">
                <div className="team-members-developers-job">
                  Frontend Developer
                </div>
              </div>
            </div>
          </div>
          <div className="team-members-developers-description">
            Ce sont les maîtres de la force : ils transforment les idées en
            réalité pour l’émerveillement de tous. Nous basons notre
            infrastructure sur des serveurs et des noeuds blockchain respectueux
            de l’environnement.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
