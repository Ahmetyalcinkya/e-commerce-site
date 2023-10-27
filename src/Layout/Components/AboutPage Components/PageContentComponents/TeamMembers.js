import React from "react";
import TeamMemberCompound from "../../../Compounds/GlobalCompounds/TeamMemberCompound";

const TeamMembers = () => {
  return (
    <div className="w-full row-centered">
      <div className="w-full h-[102rem] iphone:w-[65.625rem] iphone:h-[51rem] flex flex-col justify-around items-center">
        <div className="w-full iphone:w-[38rem] h-24 flex flex-col justify-between items-center">
          <h2 className="font-bold text-4xl leading-[3rem] text-quaternary">
            Meet Our Team
          </h2>
          <p className="font-normal text-sm leading-5 text-secondary w-[19rem] iphone:w-[29rem] h-10">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <TeamMemberCompound />
      </div>
    </div>
  );
};

export default TeamMembers;
