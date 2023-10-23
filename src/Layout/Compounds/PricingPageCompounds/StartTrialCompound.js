import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StartTrialCompound = () => {
  return (
    <div className="w-full h-[36.5rem] row-centered">
      <div className="w-[38rem] h-72 flex flex-col items-center justify-between">
        <h2 className="font-bold text-4xl leading-[3rem] text-quaternary">
          Start your 14 days free trial
        </h2>
        <p className="w-[25.75rem] h-10 text-sm leading-5 text-secondary">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="w-48 h-14 bg-primary row-centered rounded-lg text-white font-bold text-sm leading-5">
          Try it free now
        </button>
        <div className="w-60 h-12 flex justify-evenly items-center primary">
          <FontAwesomeIcon icon={faTwitter} size="xl" />
          <FontAwesomeIcon icon={faFacebook} size="xl" />
          <FontAwesomeIcon icon={faInstagram} size="xl" />
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </div>
      </div>
    </div>
  );
};

export default StartTrialCompound;
