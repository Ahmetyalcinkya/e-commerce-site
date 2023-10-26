import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PaymentPlans = () => {
  return (
    <div className="w-full flex-col iphone:flex-row iphone:w-[61.75rem] h-[130rem] iphone:h-[44rem] flex justify-around iphone:justify-between items-center">
      <div className="w-80 h-[41.5rem] flex flex-col justify-around items-center border border-[#23A6F0] rounded-xl">
        <h3 className="font-bold text-xl leading-8 text-quaternary">FREE</h3>
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
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#2DC071" />
            <h6 className="pricing-options-h6">Unlimited product updates</h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#2DC071" />
            <h6 className="pricing-options-h6">Unlimited product updates</h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#2DC071" />
            <h6 className="pricing-options-h6">Unlimited product updates</h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#BDBDBD" />
            <h6 className="pricing-options-h6">1GB Cloud storage</h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#BDBDBD" />
            <h6 className="pricing-options-h6">Email and community support</h6>
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
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#2DC071" />
            <h6 className="pricing-options-middle-h6">
              Unlimited product updates
            </h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#2DC071" />
            <h6 className="pricing-options-middle-h6">
              Unlimited product updates
            </h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#2DC071" />
            <h6 className="pricing-options-middle-h6">
              Unlimited product updates
            </h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#BDBDBD" />
            <h6 className="pricing-options-middle-h6">1GB Cloud storage</h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#BDBDBD" />
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
        <h3 className="font-bold text-xl leading-8 text-quaternary">PREMIUM</h3>
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
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#2DC071" />
            <h6 className="pricing-options-h6">Unlimited product updates</h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#2DC071" />
            <h6 className="pricing-options-h6">Unlimited product updates</h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#2DC071" />
            <h6 className="pricing-options-h6">Unlimited product updates</h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#BDBDBD" />
            <h6 className="pricing-options-h6">1GB Cloud storage</h6>
          </div>
          <div className="pricing-options-check-div">
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="#BDBDBD" />
            <h6 className="pricing-options-h6">Email and community support</h6>
          </div>
        </div>
        <button className="bg-primary text-white py-4 px-10 w-64 h-12 rounded-lg row-centered font-bold text-sm leading-5">
          Try for free
        </button>
      </div>
    </div>
  );
};

export default PaymentPlans;
