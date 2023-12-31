import React from "react";
import AboutPageHeader from "../AboutPage Components/AboutPageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PricingPageHeader = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <AboutPageHeader />
      <div className="w-full iphone:w-[26.75rem] h-44 flex flex-col justify-between items-center">
        <h5 className="font-bold text-base text-secondary leading-6">
          PRICING
        </h5>
        <h1 className="font-bold text-5xl text-quaternary">Simple Pricing</h1>
        <div className="flex items-center gap-x-4 w-32 h-12">
          <a href="#" className="text-quaternary">
            Home
          </a>
          <FontAwesomeIcon icon={faChevronRight} />
          <a href="#" className="text-fifth">
            Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPageHeader;
