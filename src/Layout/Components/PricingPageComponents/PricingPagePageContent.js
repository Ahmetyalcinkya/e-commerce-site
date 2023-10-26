import React from "react";
import ControlledSwitches from "../../Compounds/GlobalCompounds/SwitchCompound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import BrandsCompound from "../../Compounds/GlobalCompounds/BrandsCompound";
import StartTrialCompound from "../../Compounds/PricingPageCompounds/StartTrialCompound";
import PaymentPlans from "./PageContent Components/PaymentPlans";
import FAQs from "./PageContent Components/FAQs";

const PricingPagePageContent = () => {
  return (
    <div>
      <div className="w-full h-[160rem] iphone:h-[72.75rem] flex flex-col items-center justify-around bg-secondary">
        <div className="w-[40rem] h-24 flex flex-col justify-around items-center">
          <h2 className="font-bold text-quaternary text-4xl">Pricing</h2>
          <p className="text-sm text-secondary w-[29rem] h-10">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex justify-between items-center w-80 h-11">
          <div className="w-48 h-7 flex justify-evenly items-center">
            <h5 className="font-bold text-base text-quaternary">Monthly</h5>
            <ControlledSwitches />
            <h5 className="font-bold text-base text-quaternary">Yearly</h5>
          </div>
          <button className="w-28 h-11 py-2.5 px-5 bg-fifth primary row-centered font-bold text-sm leading-6 rounded-3xl">
            Save 25%
          </button>
        </div>
        <PaymentPlans />
      </div>
      <div className="w-full h-[73rem] iphone:h-96 flex flex-col justify-center bg-secondary">
        <h4 className="text-xl leading-8 text-quaternary">
          Trusted By Over 4000 Big Companies
        </h4>
        <BrandsCompound />
      </div>
      <FAQs />
      <StartTrialCompound />
    </div>
  );
};

export default PricingPagePageContent;
