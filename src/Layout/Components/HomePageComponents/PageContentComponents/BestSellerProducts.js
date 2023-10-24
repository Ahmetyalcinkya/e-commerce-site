import React from "react";
import Pic11 from "../../../../Assets/product-cover-5.png";
import Pic12 from "../../../../Assets/product-cover-5 (1).png";
import Pic13 from "../../../../Assets/product-cover-5 (2).png";
import Pic14 from "../../../../Assets/product-cover-5 (3).png";
import SectionSixPictureCompound from "../../../Compounds/HomePageCompounds/SectionSixPictureCompound";

const BestSellerProducts = () => {
  return (
    <section className="w-full iphone:h-[38.75rem] bg-secondary flex flex-col items-center">
      <div className="w-full iphone:w-[70.25rem] h-full flex justify-center py-10">
        <div className="w-full iphone:w-[65rem] flex flex-col">
          <h3 className="font-bold text-2xl leading-8 tracking-wider text-center iphone:text-left pb-5">
            BESTSELLER PRODUCTS
          </h3>
          <hr className="mb-5" />
          <div className="w-full flex-col iphone:flex-row iphone:w-[65rem] iphone:h-[27.5rem] flex justify-between items-center">
            <SectionSixPictureCompound image={Pic11} />
            <SectionSixPictureCompound image={Pic12} />
            <SectionSixPictureCompound image={Pic13} />
            <SectionSixPictureCompound image={Pic14} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellerProducts;
