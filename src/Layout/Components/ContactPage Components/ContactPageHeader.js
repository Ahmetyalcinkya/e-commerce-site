import React from "react";
import AboutPageHeader from "../AboutPage Components/AboutPageHeader";
import Pic1 from "../../../Assets/none (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactPageHeader = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <AboutPageHeader />
      <div className="w-[65.625rem] h-[46.5rem] flex justify-between items-center">
        <div className="w-[37.5rem] h-[32.5rem] flex flex-col text-left justify-between">
          <h5 className="font-bold text-base leading-6 text-[#252B42]">
            CONTACT US
          </h5>
          <h1 className="w-96 h-40 font-bold text-6xl leading-[5rem] text-[#252B42]">
            Get in touch today!
          </h1>
          <h4 className="text-xl leading-8 text-[#737373] w-[23.5rem] h-[3.75rem]">
            We know how large objects will act, but things on a small scale{" "}
          </h4>
          <div className="w-60 h-20 flex flex-col justify-between">
            <h3 className="font-bold text-2xl leading-8 text-[#252B42]">
              Phone ; +451 215 215
            </h3>
            <h3 className="font-bold text-2xl leading-8 text-[#252B42]">
              Fax : +451 215 215
            </h3>
          </div>
          <div className="w-60 h-20 flex justify-around items-center text-[#252B42]">
            <FontAwesomeIcon icon={faTwitter} size="xl" />
            <FontAwesomeIcon icon={faFacebook} size="xl" />
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </div>
        </div>
        <img src={Pic1} alt="" />
      </div>
    </div>
  );
};

export default ContactPageHeader;
