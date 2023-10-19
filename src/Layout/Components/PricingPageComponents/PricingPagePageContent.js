import React from "react";
import ControlledSwitches from "../../Compounds/GlobalCompounds/SwitchCompound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const PricingPagePageContent = () => {
  return (
    <div>
      <div className="w-full h-[72.75rem] flex flex-col items-center justify-around bg-[#FAFAFA]">
        <div className="w-[40rem] h-24 flex flex-col justify-around items-center">
          <h2 className="font-bold text-[#252B42] text-4xl">Pricing</h2>
          <p className="text-sm text-[#737373] w-[29rem] h-10">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex justify-between items-center w-80 h-11">
          <div className="w-48 h-7 flex justify-evenly items-center">
            <h5 className="font-bold text-base text-[#252B42]">Monthly</h5>
            <ControlledSwitches />
            <h5 className="font-bold text-base text-[#252B42]">Yearly</h5>
          </div>
          <button className="w-28 h-11 py-2.5 px-5 bg-[#B2E3FF] text-[#23A6F0] flex justify-center items-center font-bold text-sm leading-6 rounded-3xl">
            Save 25%
          </button>
        </div>
        <div className="w-[61.75rem] h-[44rem] flex justify-between items-center">
          <div className="w-80 h-[41.5rem] flex flex-col justify-around items-center border border-[#23A6F0] rounded-xl">
            <h3 className="font-bold text-xl leading-8 text-[#252B42]">FREE</h3>
            <h5 className="font-bold text-base leading-6 text-[#737373] w-40 h-12">
              Organize across all apps by hand
            </h5>
            <div className="flex w-28 h-14 justify-between text-[#23A6F0]">
              <h2 className="font-bold text-4xl leading-[3rem]">0</h2>
              <div className="flex flex-col w-[4.75rem] h-14 text-left">
                <h3 className="font-bold text-2xl leading-8">$</h3>
                <h6 className="font-bold text-sm leading-6 text-[#8EC2F2]">
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
            <button className="bg-[#252B42] text-white py-4 px-10 w-64 h-12 rounded-lg flex justify-center items-center font-bold text-sm leading-5">
              Try for free
            </button>
          </div>
          <div className="w-80 h-[44rem] flex flex-col justify-around items-center border border-[#23A6F0] rounded-xl bg-[#252B42]">
            <h3 className="font-bold text-xl leading-8 text-white">STANDARD</h3>
            <h5 className="font-bold text-base leading-6 text-white w-40 h-12">
              Organize across all apps by hand
            </h5>
            <div className="flex w-44 h-14 justify-around text-[#23A6F0]">
              <h2 className="font-bold text-4xl leading-[3rem]">9.99</h2>
              <div className="flex flex-col w-[4.75rem] h-14 text-left">
                <h3 className="font-bold text-2xl leading-8">$</h3>
                <h6 className="font-bold text-sm leading-6 text-[#8EC2F2]">
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
            <button className="bg-[#23A6F0] text-white py-4 px-10 w-64 h-12 rounded-lg flex justify-center items-center font-bold text-sm leading-5">
              Try for free
            </button>
          </div>
          <div className="w-80 h-[41.5rem] flex flex-col justify-around items-center border border-[#23A6F0] rounded-xl">
            <h3 className="font-bold text-xl leading-8 text-[#252B42]">
              PREMIUM
            </h3>
            <h5 className="font-bold text-base leading-6 text-[#737373] w-40 h-12">
              Organize across all apps by hand
            </h5>
            <div className="flex w-[11.25rem] h-14 justify-between text-[#23A6F0]">
              <h2 className="font-bold text-4xl leading-[3rem]">19.99</h2>
              <div className="flex flex-col w-[4.75rem] h-14 text-left">
                <h3 className="font-bold text-2xl leading-8">$</h3>
                <h6 className="font-bold text-sm leading-6 text-[#8EC2F2]">
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
            <button className="bg-[#23A6F0] text-white py-4 px-10 w-64 h-12 rounded-lg flex justify-center items-center font-bold text-sm leading-5">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPagePageContent;
