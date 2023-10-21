import React from "react";
import AboutPageHeader from "../AboutPage Components/AboutPageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const TeamPageHeader = () => {
  return (
    <div className="w-full h-96 flex flex-col justify-between items-center">
      <AboutPageHeader />
      <div className="w-[54.5rem] h-72 flex flex-col justify-center items-center">
        <h5 className=" font-bold text-base leading-6 text-[#737373]">
          WHAT WE DO
        </h5>
        <h1 className="font-bold leading-[5rem] text-6xl text-[#252B42]">
          Innovation tailored for you
        </h1>
        <div className="flex items-center gap-x-4 w-32 h-12">
          <a href="#" className="text-[#252B42]">
            Home
          </a>
          <FontAwesomeIcon icon={faChevronRight} />
          <a href="#" className="text-[#BDBDBD]">
            Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamPageHeader;
