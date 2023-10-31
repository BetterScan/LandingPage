import React from "react";
import "./LandingPrincipal.css";
function LandingPrincipal() {
  return (
    <div className="landing-principal-container">
      <div className="lading-principal-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="1012"
          width="67.27vw"
          // height="832"
          height="100vh"
          viewBox="0 0 1012 832"
          fill="none"
        >
          <path
            d="M204.4 -275.892C208.587 -297.714 229.757 -311.941 251.544 -307.574L1609.53 -35.3938C1631.37 -31.0163 1645.42 -9.64111 1640.79 12.1465L1473.39 799.337C1469.46 817.809 1453.15 831.017 1434.26 831.017L40.405 831.017C15.2905 831.017 -3.61109 808.143 1.12167 783.479L204.4 -275.892Z"
            fill="url(#paint0_linear_845_2983)"
            fill-opacity="0.1"
          />
          <defs>
            <linearGradient
              id="paint0_linear_845_2983"
              x1="-307.074"
              y1="187.603"
              x2="1976.78"
              y2="579.278"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD94A" />
              <stop offset="0.520833" stopColor="#F74545" />
              <stop offset="1" stopColor="#95649D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default LandingPrincipal;
