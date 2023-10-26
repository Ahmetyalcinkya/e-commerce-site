import React from "react";
import BrandsCompound from "../../../Compounds/GlobalCompounds/BrandsCompound";

const Companies = () => {
  return (
    <div className="w-full h-[90rem] iphone:h-[30rem] bg-[#FAFAFA] flex flex-col justify-around items-center">
      <div className="w-80 iphone:w-[54rem] h-60 iphone:h-32 flex flex-col justify-around iphone:justify-between items-center">
        <h2 className="font-bold text-4xl text-quaternary">
          Big Companies Are Here
        </h2>
        <p className="w-full iphone:w-[34rem] h-16 iphone:h-10 text-center font-normal text-sm leading-5 text-secondary">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <BrandsCompound />
    </div>
  );
};

export default Companies;
