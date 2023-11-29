import React from "react";
import "./FeaturesPresentation.css";
import testimonialsImg from "../../Assets/testimonials.svg";
import multiLang from "../../Assets/multilang.svg";
import rectangleDashed from "../../Assets/rectangle-follow-tx.svg";
import betterScanLogoOrange from "../../Assets/betterscan-orange-gradient-logo.svg";
import lastTransactions from "../../Assets/last-transactions.svg";
import multiChainsImage from "../../Assets/multichains-image.svg";
function FeaturesPresentation() {
  return (
    <>
      <div
        id="features-presentation"
        className="features-presentation-container"
      >
        <div className="features-presentation-title-container">
          <div>Les principales fonctionnalités de BetterScan</div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Arcu ultricies condimentum
            venenatis turpis parturient nisl sed
          </div>
        </div>
        <div className="features-presentation-concept-and-multi-lang-container">
          <div className="features-presentation-concept-container">
            <div className="features-presentation-concept-title">Concept</div>
            <div className="features-presentation-concept-description">
              Lorem ipsum dolor u tendamas dolor u tendamas lorem ipsum dolor u
              tendamas Lorem ipsum dolor u tendamas dolor.
            </div>
            <img src={testimonialsImg} alt="testimonials" />
            {/* 1320 */}
          </div>
          <div className="features-presentation-multi-lang-container">
            <div className="features-presentation-multi-lang-title">
              Multi-langues
            </div>
            <div className="features-presentation-multi-lang-description">
              Lorem ipsum dolor u tendamas dolor
            </div>
            <div className="features-presentation-multi-lang-img-container">
              <img src={multiLang} alt="" />
            </div>
          </div>
        </div>
        <div className="features-presentation-follow-tx-and-blockhains-container">
          <div className="features-presentation-follow-tx-container">
            <div className="features-presentation-follow-tx-wrap">
              <img
                className="features-presentation-follow-tx-image"
                src={rectangleDashed}
                alt="rectangle dashed"
              />
              <div className="features-presentation-follow-tx-title">
                Suivre vos transactions n’a jamais été aussi simple
              </div>
              <div className="features-presentation-follow-tx-logo-and-tx-container">
                <div className="features-presentation-follow-betterscan-orange-logo">
                  <img
                    src={betterScanLogoOrange}
                    alt="betterscan logo orange"
                  />
                </div>
                <img src={lastTransactions} alt="betterscan logo orange" />
              </div>
            </div>
          </div>
          <div className="features-presentation-multichains-container">
            <div className="features-presentation-multichains-title">
              Multi-chaînes
            </div>
            <div className="features-presentation-multichains-description">
              Lorem ipsum dolor u tendamas dolor u tendamas lorem ipsum dolor u
              tendamas Lorem ipsum dolor u tendamas dolor.
            </div>
            <img
              className="features-presentation-multichains-image"
              src={multiChainsImage}
              alt="multi-chaines image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesPresentation;
