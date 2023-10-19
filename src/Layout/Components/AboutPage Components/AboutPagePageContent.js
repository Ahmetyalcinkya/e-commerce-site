import React from "react";
import Pic1 from "../../../Assets/none.png";

const AboutPagePageContent = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-[65.625rem] h-[34rem] flex justify-between items-center">
        <div className="flex flex-col justify-between w-[37.5rem] h-80 text-left">
          <h5 className="font-bold text-base leading-6">ABOUT COMPANY</h5>
          <h1 className="font-bold text-6xl">ABOUT US</h1>
          <h4 className="text-xl text-[#737373] w-[23.5rem] h-16">
            We know how large objects will act, but things on a small scale
          </h4>
          <button className="w-48 h-14 flex justify-center items-center font-bold text-sm leading-5 text-white bg-[#23A6F0] rounded">
            Get Quote Now
          </button>
        </div>
        <div>
          <img src={Pic1} alt="" />
        </div>
      </div>
      <div className="w-full h-60 flex justify-center items-center">
        <div className="flex w-[63.5rem] h-48 justify-around items-center">
          <div className="flex flex-col justify-around gap-y-6">
            <p className="text-[#E74040] font-normal text-sm leading-5 text-left">
              Problems trying
            </p>
            <h3 className="font-bold text-2xl leading-8 w-[24.5rem] h-24 text-left">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
          </div>
          <div className="w-[33rem] h-10 flex items-center justify-center text-left">
            <p className="font-normal text-sm leading-5 text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPagePageContent;
