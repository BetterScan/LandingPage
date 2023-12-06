import React, { useState } from "react";
import chevronUp from "../../Assets/chevron-up.svg";
import chevronDown from "../../Assets/chevron-down.svg";
import "./FAQ.css";
function FAQ() {
  const [isFirstQuestionClicked, setIsFirstQuestionClicked] = useState(false);
  function handleQuestionClick() {
    setIsFirstQuestionClicked(!isFirstQuestionClicked);
  }
  return (
    <div className="faq-container">
      <div className="faq-title">Questions fréquentes</div>
      <div className="faq-description">
        Learn more about BetterScan and our ICO
      </div>
      <div className="faq-questions-list-container">
        <div
          onClick={handleQuestionClick}
          className="faq-questions-first-question-container"
        >
          <div className="faq-questions-first-question-title-and-chevron">
            <div className="faq-questions-first-question-title">
              Sur quelle blockchain sont les $BSCAN ?
            </div>
            <div>
              <img src={chevronUp} alt="chevron logo" />
            </div>
          </div>
          <div
            style={isFirstQuestionClicked ? {} : { display: "none" }}
            className="faq-questions-first-question-answer"
          >
            Le jeton est un ERC-20 sur la blockchain ZKSync Era. Pour ajouter le
            smart-contract à ton Metamask : 0x...
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
