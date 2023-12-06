import React from "react";
import AboutPageHeader from "../AboutPage Components/AboutPageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const TeamPageHeader = () => {
  return (
    <div className="w-full column-centered">
      <AboutPageHeader />
      <div className="w-full gap-y-2 iphone:gap-y-0 iphone:w-[54.5rem] iphone:h-72 column-centered">
        <h5 className="font-bold text-base leading-6 text-secondary">
          WHAT WE DO
        </h5>
        <h1 className="font-bold leading-[5rem] text-6xl text-quaternary">
          Innovation tailored for you
        </h1>
        <div className="flex items-center gap-x-4 w-32 h-12">
          <a href="#" className="text-quaternary">
            Home
          </a>
          <FontAwesomeIcon icon={faChevronRight} />
          <a href="#" className="text-fifth">
            Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamPageHeader;
