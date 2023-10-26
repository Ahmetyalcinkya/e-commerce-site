import React from "react";

const Content1 = () => {
  return (
    <div className="w-full h-[31rem] iphone:h-60 row-centered">
      <div className="flex flex-col h-[21rem] iphone:flex-row iphone:w-[63.5rem] iphone:h-48 justify-around items-center">
        <div className="flex flex-col justify-around gap-y-6">
          <p className="text-sixth font-normal text-center text-sm leading-5 iphone:text-left">
            Problems trying
          </p>
          <h3 className="font-bold text-2xl leading-8 w-[17rem] text-center iphone:w-[24.5rem] h-24 iphone:text-left">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="w-[19rem] iphone:w-[33rem] h-10 flex items-center justify-center text-left">
          <p className="font-normal text-sm leading-5 text-secondary">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content1;
