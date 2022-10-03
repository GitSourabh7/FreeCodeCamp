import React from "react";
import Spacer from "./Common/spacer";
import ButtonSignIn from "./Common/buttonSignIn";
import "../App.css";
import { ReactComponent as Apple } from "../Icons/Apple-logo.svg";
import { ReactComponent as Google } from "../Icons/Google-logo.svg";
import { ReactComponent as Microsoft } from "../Icons/Microsoft-logo.svg";
import { ReactComponent as Spotify } from "../Icons/Spotify-logo.svg";
import { ReactComponent as Amazon } from "../Icons/Amazon-logo.svg";

const LandingTop = () => {
  return (
    <div className="container">
      <Spacer />
      <div className="child-container">
        <h1 className="fw-bold mb-5">Learn to code - for free</h1>
        <p className="fs-1 fw-bold mb-5">Build Projects.</p>
        <p className="fs-1 fw-bold mb-5">Earn Certifications.</p>
        <p className="fs-5 fw-bold my-23">
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </p>
        <div className="logo-row">
          <Apple />
          <Google />
          <Microsoft />
          <Spotify />
          <Amazon />
        </div>
        <Spacer />
        <ButtonSignIn />
        <Spacer />
        <Spacer />
        <div>
          <img
            src="https://www.freecodecamp.org/static/wide-image-3cb329e8b3cae865be76746fbd069cd2.png"
            className="d-block"
            alt="south korean team"
            width="750px"
            height="443px"
          />
          <p className="text-center my-3 fs-4 fw-bold">
            freeCodeCamp students at a local study group in South Korea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingTop;
