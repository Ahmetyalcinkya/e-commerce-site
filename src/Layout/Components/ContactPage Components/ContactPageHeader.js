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
import Header from "../HomePageComponents/Header";

const ContactPageHeader = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <Header />
      <div className="w-full flex-col iphone:flex-row h-[67.5rem] iphone:w-[65.625rem] iphone:h-[46.5rem] flex justify-between items-center">
        <div className="w-full gap-y-2 iphone:w-[37.5rem] iphone:h-[32.5rem] flex flex-col text-left justify-between items-center iphone:items-start">
          <h5 className="font-bold text-center iphone:text-left text-base leading-6 text-quaternary">
            CONTACT US
          </h5>
          <h1 className="w-full iphone:w-96 text-center iphone:text-left font-bold text-6xl leading-[5rem] text-quaternary">
            Get in touch today!
          </h1>
          <h4 className="text-xl leading-8 text-center iphone:text-left text-secondary w-[17.5rem] iphone:w-[23.5rem] iphone:h-[3.75rem]">
            We know how large objects will act, but things on a small scale{" "}
          </h4>
          <div className="w-60 h-20 flex flex-col justify-between">
            <h3 className="font-bold text-2xl leading-8 text-quaternary">
              Phone ; +451 215 215
            </h3>
            <h3 className="font-bold text-2xl leading-8 text-quaternary">
              Fax : +451 215 215
            </h3>
          </div>
          <div className="w-60 h-20 flex justify-around items-center text-quaternary">
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
