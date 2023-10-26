import React from "react";
import { Link } from "react-router-dom";
import Pic2 from "../../../../Assets/unsplash_vjMgqUkS8q8.png";

const References = () => {
  return (
    <div className="w-full h-[40rem] bg-[#2A7CC7] relative row-centered">
      <img
        src={Pic2}
        alt=""
        className="hidden iphone:absolute right-0 h-[40rem]"
      />
      <div className="w-[65.625rem] h-[32rem] flex flex-col text-left justify-around text-white">
        <h5 className="font-bold text-base leading-6">WORK WITH US</h5>
        <h2 className="font-bold text-4xl leading-[3rem]">
          Now Let’s grow Yours
        </h2>
        <p className="text-sm leading-5 w-[27.5rem] h-10">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th{" "}
        </p>
        <Link
          to="/contact"
          className="font-bold text-sm leading-6 text-[#FAFAFA] text-left w-32 h-12 py-4 px-10 border row-centered rounded"
        >
          Button
        </Link>
      </div>
    </div>
  );
};

export default References;
