import React from "react";
import SectionOnePictureCompound from "../../../Compounds/HomePageCompounds/SectionOnePictureCompound";
import Pic1 from "../../../../Assets/h5-baner-3 1.png";
import Pic2 from "../../../../Assets/media bg-cover.png";
import Pic3 from "../../../../Assets/media bg-cover (1).png";

const ShopCards = () => {
  return (
    <section className="flex w-full h-[55rem] iphone:h-[24.5rem] bg-secondary justify-center items-center">
      <div className="flex flex-col iphone:flex-row w-[67.75rem] h-[14.5rem] items-center justify-center gap-y-4 iphone:gap-y-0 iphone:justify-between">
        {/* Map - key= index */}
        <SectionOnePictureCompound image={Pic1} />
        <SectionOnePictureCompound image={Pic2} />
        <SectionOnePictureCompound image={Pic3} />
      </div>
    </section>
  );
};

export default ShopCards;
