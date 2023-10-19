import React from "react";
import team from "../../../Data/team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const TeamMemberCompound = () => {
  return (
    <div className="w-[64.5rem] h-96 flex justify-between">
      {team.map((teamMember, index) => (
        <div
          className="flex flex-col justify-between items-center w-80 h-96"
          key={index}
        >
          <img src={teamMember?.teamImg} alt="" className="w-80 h-60" />
          <h5 className="font-bold text-base leading-6 text-[#252B42]">
            {teamMember?.username}
          </h5>
          <h6 className="font-bold text-base leading-6 text-[#737373]">
            {teamMember?.profession}
          </h6>
          <div className="flex w-28 h-6 justify-between text-[#23A6F0]">
            <FontAwesomeIcon icon={faFacebook} size="xl" />
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <FontAwesomeIcon icon={faTwitter} size="xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberCompound;
