import React from "react";
import { Link } from "react-router-dom";
import Pic1 from "../../../../Assets/none.png";

const AboutHeader = () => {
  return (
    <div className="w-full h-[67.5rem] flex-col iphone:flex-row iphone:w-[65.625rem] iphone:h-[34rem] flex justify-between items-center">
      <div className="flex flex-col w-full h-[37rem] items-center iphone:items-start iphone:text-left justify-around iphone:justify-between iphone:w-[37.5rem] iphone:h-80 ">
        <h5 className="font-bold text-base leading-6">ABOUT COMPANY</h5>
        <h1 className="font-bold text-6xl">ABOUT US</h1>
        <h4 className="text-xl text-secondary w-[23.5rem] h-16">
          We know how large objects will act, but things on a small scale
        </h4>
        <Link
          to="/pricing"
          className="w-48 h-14 row-centered font-bold text-sm leading-5 text-white bg-primary rounded"
        >
          Get Quote Now
        </Link>
      </div>
      <div>
        <img src={Pic1} alt="" />
      </div>
    </div>
  );
};

export default AboutHeader;
