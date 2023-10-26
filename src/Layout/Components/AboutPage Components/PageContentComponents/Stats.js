import React from "react";

const Stats = () => {
  return (
    <div className="w-full h-[63rem] iphone:h-64 row-centered">
      <div className="w-full iphone:w-[65.625rem] h-full flex flex-col iphone:flex-row justify-around iphone:justify-between items-center">
        <div className="w-60 h-28 flex flex-col justify-center items-center">
          <h1 className="font-bold text-6xl leading-[5rem] text-quaternary">
            15K
          </h1>
          <h5 className="font-bold text-base leading-6 text-secondary">
            Happy Customers
          </h5>
        </div>
        <div className="w-60 h-28 flex flex-col justify-center items-center">
          <h1 className="font-bold text-6xl leading-[5rem] text-quaternary">
            150K
          </h1>
          <h5 className="font-bold text-base leading-6 text-secondary">
            Monthly Visitors
          </h5>
        </div>
        <div className="w-60 h-28 flex flex-col justify-center items-center">
          <h1 className="font-bold text-6xl leading-[5rem] text-quaternary">
            15
          </h1>
          <h5 className="font-bold text-base leading-6 text-secondary">
            Countries Worldwide
          </h5>
        </div>
        <div className="w-60 h-28 flex flex-col justify-center items-center">
          <h1 className="font-bold text-6xl leading-[5rem] text-quaternary">
            100+
          </h1>
          <h5 className="font-bold text-base leading-6 text-secondary">
            Top Partners
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Stats;
