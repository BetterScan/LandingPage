import React from "react";
import "./Partners.css";
import hugeLetterLogo from "../../Assets/huge-letter-partner.svg";
import humanLabLogo from "../../Assets/human-lab-partner.svg";
import coinauteLogo from "../../Assets/coinaute-partner.svg";
import avicienneLogo from "../../Assets/avicienne-partner.svg";
import jwCorpLogo from "../../Assets/jwcorp-partner.svg";

function Partners() {
  return (
    <>
      <div className="partners-container">
        <div className="partners-wrap">
          <div className="partners-title-and-description-container">
            <div className="partners-title-container">
              Ils nous font <span>confiance</span>
            </div>
            <div className="partners-description-container">
              Lorem ipsum dolor sit amet consectetur. Arcu ultricies condimentum
              venenatis turpis parturient nisl sed
            </div>
          </div>
          <div className="partners-logo-corporations-partners">
            <a
              href="https://hugeletter.fr"
              className="partners-logo-corporations-huge-letter"
            ></a>
            <a
              href="https://"
              className="partners-logo-corporations-human-lab"
            ></a>
            <a
              href="https://coinaute.com"
              className="partners-logo-corporations-coinaute"
            ></a>
            <a
              href="https://avicienne.studio"
              className="partners-logo-corporations-avicienne"
            ></a>
            <a
              href="https://jwcorp.io"
              className="partners-logo-corporations-jwcorp"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
