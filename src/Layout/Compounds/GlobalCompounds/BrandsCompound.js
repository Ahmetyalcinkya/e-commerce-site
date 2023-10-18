import React from "react";
import Pic1 from "../../../Assets/Vector.png";
import Pic2 from "../../../Assets/Vector (1).png";
import Pic3 from "../../../Assets/Vector (2).png";
import Pic4 from "../../../Assets/Vector (3).png";
import Pic5 from "../../../Assets/Vector (4).png";
import Pic6 from "../../../Assets/Vector (5).png";

const BrandsCompound = () => {
  return (
    <section className="w-full h-[10.938rem] bg-[#FAFAFA] flex items-center justify-center">
      <div className="flex justify-between w-[65.625rem] m-auto items-center">
        <img src={Pic1} alt="" className="w-[6.375rem] h-[2.125rem]" />
        <img src={Pic2} alt="" className="w-[5.25rem] h-[3.75rem]" />
        <img src={Pic3} alt="" className="w-[6.375rem] h-[4.688rem]" />
        <img src={Pic4} alt="" className="w-[6.375rem] h-[2.625rem]" />
        <img src={Pic5} alt="" className="w-[6.5rem] h-[3.75rem]" />
        <img src={Pic6} alt="" className="w-[4.688rem] h-[4.375rem]" />
      </div>
    </section>
  );
};

export default BrandsCompound;
