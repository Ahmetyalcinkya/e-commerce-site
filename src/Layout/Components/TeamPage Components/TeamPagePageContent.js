import React from "react";
import Pic1 from "../../../Assets/unsplash_Lks7vei-eAg.png";
import Pic2 from "../../../Assets/unsplash_gMsnXqILjp4.png";
import Pic3 from "../../../Assets/unsplash_1-aA2Fadydc.png";
import Pic4 from "../../../Assets/unsplash_PSmDDeXaEWE.png";
import Pic5 from "../../../Assets/unsplash_mcSDtbWXUZU.png";
import TeamMemberCompound from "../../Compounds/GlobalCompounds/TeamMemberCompound";
import StartTrialCompound from "../../Compounds/PricingPageCompounds/StartTrialCompound";

const TeamPagePageContent = () => {
  return (
    <div className="w-full column-centered">
      <div className="w-full flex-col iphone:flex-row iphone:w-[90rem] iphone:h-[33.25rem] flex justify-evenly">
        <img src={Pic1} alt="" />
        <div className="w-full flex flex-row iphone:flex-col justify-between">
          <img src={Pic2} alt="" className="w-1/2 p-1 iphone:w-full" />
          <img src={Pic3} alt="" className="w-1/2 p-1 iphone:w-full" />
        </div>
        <div className="w-full flex flex-row iphone:flex-col justify-between">
          <img src={Pic4} alt="" className="w-1/2 p-1 iphone:w-full" />
          <img src={Pic5} alt="" className="w-1/2 p-1 iphone:w-full" />
        </div>
      </div>
      <div className="w-full h-[262rem] iphone:h-[110rem] flex flex-col justify-around items-center">
        <h2 className="font-bold text-4xl leading-[3rem] text-quaternary">
          Meet Our Team
        </h2>
        <TeamMemberCompound />
        <TeamMemberCompound />
        <TeamMemberCompound />
      </div>
      <StartTrialCompound />
    </div>
  );
};

export default TeamPagePageContent;
