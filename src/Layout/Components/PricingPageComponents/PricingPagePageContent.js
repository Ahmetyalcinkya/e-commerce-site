import React from "react";
import ControlledSwitches from "../../Compounds/GlobalCompounds/SwitchCompound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import BrandsCompound from "../../Compounds/GlobalCompounds/BrandsCompound";
import StartTrialCompound from "../../Compounds/PricingPageCompounds/StartTrialCompound";

const PricingPagePageContent = () => {
  return (
    <div>
      <div className="w-full h-[72.75rem] flex flex-col items-center justify-around bg-secondary">
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
        <div className="w-[61.75rem] h-[44rem] flex justify-between items-center">
          <div className="w-80 h-[41.5rem] flex flex-col justify-around items-center border border-[#23A6F0] rounded-xl">
            <h3 className="font-bold text-xl leading-8 text-quaternary">
              FREE
            </h3>
            <h5 className="font-bold text-base leading-6 text-secondary w-40 h-12">
              Organize across all apps by hand
            </h5>
            <div className="flex w-28 h-14 justify-between primary">
              <h2 className="font-bold text-4xl leading-[3rem]">0</h2>
              <div className="flex flex-col w-[4.75rem] h-14 text-left">
                <h3 className="font-bold text-2xl leading-8">$</h3>
                <h6 className="font-bold text-sm leading-6 text-seventh">
                  Per Month
                </h6>
              </div>
            </div>
            <div className="w-64 h-60 flex flex-col justify-around text-left">
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#2DC071"
                />
                <h6 className="pricing-options-h6">
                  Unlimited product updates
                </h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#2DC071"
                />
                <h6 className="pricing-options-h6">
                  Unlimited product updates
                </h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#2DC071"
                />
                <h6 className="pricing-options-h6">
                  Unlimited product updates
                </h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#BDBDBD"
                />
                <h6 className="pricing-options-h6">1GB Cloud storage</h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#BDBDBD"
                />
                <h6 className="pricing-options-h6">
                  Email and community support
                </h6>
              </div>
            </div>
            <button className="bg-tertiary text-white py-4 px-10 w-64 h-12 rounded-lg row-centered font-bold text-sm leading-5">
              Try for free
            </button>
          </div>
          <div className="w-80 h-[44rem] flex flex-col justify-around items-center border border-[#23A6F0] rounded-xl bg-tertiary">
            <h3 className="font-bold text-xl leading-8 text-white">STANDARD</h3>
            <h5 className="font-bold text-base leading-6 text-white w-40 h-12">
              Organize across all apps by hand
            </h5>
            <div className="flex w-44 h-14 justify-around primary">
              <h2 className="font-bold text-4xl leading-[3rem]">9.99</h2>
              <div className="flex flex-col w-[4.75rem] h-14 text-left">
                <h3 className="font-bold text-2xl leading-8">$</h3>
                <h6 className="font-bold text-sm leading-6 text-seventh">
                  Per Month
                </h6>
              </div>
            </div>
            <div className="w-64 h-60 flex flex-col justify-around text-left">
              <div className="pricing-options-check-div ">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#2DC071"
                />
                <h6 className="pricing-options-middle-h6">
                  Unlimited product updates
                </h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#2DC071"
                />
                <h6 className="pricing-options-middle-h6">
                  Unlimited product updates
                </h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#2DC071"
                />
                <h6 className="pricing-options-middle-h6">
                  Unlimited product updates
                </h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#BDBDBD"
                />
                <h6 className="pricing-options-middle-h6">1GB Cloud storage</h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#BDBDBD"
                />
                <h6 className="pricing-options-middle-h6">
                  Email and community support
                </h6>
              </div>
            </div>
            <button className="bg-primary text-white py-4 px-10 w-64 h-12 rounded-lg row-centered font-bold text-sm leading-5">
              Try for free
            </button>
          </div>
          <div className="w-80 h-[41.5rem] flex flex-col justify-around items-center border border-[#23A6F0] rounded-xl">
            <h3 className="font-bold text-xl leading-8 text-quaternary">
              PREMIUM
            </h3>
            <h5 className="font-bold text-base leading-6 text-secondary w-40 h-12">
              Organize across all apps by hand
            </h5>
            <div className="flex w-[11.25rem] h-14 justify-between primary">
              <h2 className="font-bold text-4xl leading-[3rem]">19.99</h2>
              <div className="flex flex-col w-[4.75rem] h-14 text-left">
                <h3 className="font-bold text-2xl leading-8">$</h3>
                <h6 className="font-bold text-sm leading-6 text-seventh">
                  Per Month
                </h6>
              </div>
            </div>
            <div className="w-64 h-60 flex flex-col justify-around text-left">
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#2DC071"
                />
                <h6 className="pricing-options-h6">
                  Unlimited product updates
                </h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#2DC071"
                />
                <h6 className="pricing-options-h6">
                  Unlimited product updates
                </h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#2DC071"
                />
                <h6 className="pricing-options-h6">
                  Unlimited product updates
                </h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#BDBDBD"
                />
                <h6 className="pricing-options-h6">1GB Cloud storage</h6>
              </div>
              <div className="pricing-options-check-div">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#BDBDBD"
                />
                <h6 className="pricing-options-h6">
                  Email and community support
                </h6>
              </div>
            </div>
            <button className="bg-primary text-white py-4 px-10 w-64 h-12 rounded-lg row-centered font-bold text-sm leading-5">
              Try for free
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-96 flex flex-col justify-center bg-secondary">
        <h4 className="text-xl leading-8 text-quaternary">
          Trusted By Over 4000 Big Companies
        </h4>
        <BrandsCompound />
      </div>
      <div className="w-full h-[65rem] row-centered">
        <div className="w-[65.625rem] h-full flex flex-col justify-around items-center">
          <div className="w-[38rem] h-32 flex flex-col justify-between">
            <h2 className="font-bold text-4xl leading-[3rem] text-quaternary">
              Pricing FAQs
            </h2>
            <h4 className="w-[34.5rem] h-16 text-xl text-secondary leading-8">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics
            </h4>
          </div>
          <div className="w-full h-[33.75rem] flex flex-col items-center justify-center">
            <div className="w-[30.75rem] h-40 flex justify-center">
              <div className="flex justify-between gap-x-2">
                <FontAwesomeIcon icon={faChevronRight} color="#23A6F0" />
                <div className="w-[27.5rem] h-28 flex flex-col justify-between">
                  <h5 className="font-bold text-base leading-7 text-quaternary text-left">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <p className="text-sm leading-5 text-secondary text-left">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-x-2 ">
                <FontAwesomeIcon icon={faChevronRight} color="#23A6F0" />
                <div className="w-[27.5rem] h-28 flex flex-col justify-between">
                  <h5 className="font-bold text-base leading-7 text-quaternary text-left">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <p className="text-sm leading-5 text-secondary text-left">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[30.75rem] h-40 flex justify-center">
              <div className="flex justify-between gap-x-2">
                <FontAwesomeIcon icon={faChevronRight} color="#23A6F0" />
                <div className="w-[27.5rem] h-28 flex flex-col justify-between">
                  <h5 className="font-bold text-base leading-7 text-quaternary text-left">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <p className="text-sm leading-5 text-secondary text-left">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-x-2 ">
                <FontAwesomeIcon icon={faChevronRight} color="#23A6F0" />
                <div className="w-[27.5rem] h-28 flex flex-col justify-between">
                  <h5 className="font-bold text-base leading-7 text-quaternary text-left">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <p className="text-sm leading-5 text-secondary text-left">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[30.75rem] h-40 flex justify-center">
              <div className="flex justify-between gap-x-2">
                <FontAwesomeIcon icon={faChevronRight} color="#23A6F0" />
                <div className="w-[27.5rem] h-28 flex flex-col justify-between">
                  <h5 className="font-bold text-base leading-7 text-quaternary text-left">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <p className="text-sm leading-5 text-secondary text-left">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-x-2 ">
                <FontAwesomeIcon icon={faChevronRight} color="#23A6F0" />
                <div className="w-[27.5rem] h-28 flex flex-col justify-between">
                  <h5 className="font-bold text-base leading-7 text-quaternary text-left">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <p className="text-sm leading-5 text-secondary text-left">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h4 className="text-xl leading-8 text-secondary">
            Haven’t got your answer? Contact our support
          </h4>
        </div>
      </div>
      <StartTrialCompound />
    </div>
  );
};

export default PricingPagePageContent;
