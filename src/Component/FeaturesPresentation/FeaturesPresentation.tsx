import React from "react";
import "./FeaturesPresentation.css";
import testimonialsImg from "../../Assets/testimonials.svg";
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
        <div className="features-presentation-concept-container">
          <div className="features-presentation-concept-title">Concept</div>
          <div className="features-presentation-concept-description">
            Lorem ipsum dolor u tendamas dolor u tendamas lorem ipsum dolor u
            tendamas Lorem ipsum dolor u tendamas dolor.
          </div>
          <img src={testimonialsImg} alt="testimonials image" />
          {/* 1320 */}
        </div>
      </div>
    </>
  );
}

export default FeaturesPresentation;
