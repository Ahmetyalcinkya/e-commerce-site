import React from "react";
import SectionTwoPictureCompound from "../../../Compounds/HomePageCompounds/SectionTwoPictureCompound";
import Pic2 from "../../../../Assets/h5-baner-3 1.png";
import Pic3 from "../../../../Assets/media bg-cover.png";
import Pic4 from "../../../../Assets/media bg-cover (1).png";
import Pic5 from "../../../../Assets/card-cover-5.jpg";
import { Icon } from "../../../../Icons/icons";

const ProductCards1 = () => {
  return (
    <section className="w-full h-[190rem] iphone:h-[56.25rem] mt-[6.25rem] ">
      <div className="flex flex-col w-full iphone:flex-row iphone:w-[67.375rem] m-auto justify-between">
        <img src={Pic5} alt="" className="px-2 iphone:px-0" />
        <div className="w-full h-[120rem] iphone:w-[41.125rem] iphone:h-[50rem]">
          <div className="py-20 gap-y-10 iphone:py-0 iphone:h-[3.125rem] w-full justify-between flex items-center mb-2 flex-col iphone:flex-row">
            <h5 className="font-bold text-sm tracking-wide w-56">
              BESTSELLER PRODUCTS
            </h5>
            <div className="flex flex-col w-full h-40 iphone:flex-row iphone:w-[27rem] justify-around iphone:justify-between items-center">
              <div className="flex w-[18.75rem] justify-around">
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Accesories</a>
              </div>
              <div className="flex">
                <span className="icon-span">
                  <Icon name="prev" size={16} />
                </span>
                <span className="icon-span">
                  <Icon name="next" size={16} />
                </span>
              </div>
            </div>
          </div>
          <hr className="mb-2 w-full" />
          <div className="w-full h-[100rem] iphone:w-[41.125rem] iphone:h-[45.5rem] flex flex-col justify-around iphone:justify-center">
            <div className="best-seller-small flex-col justify-center iphone:flex-row">
              <SectionTwoPictureCompound image={Pic2} />
              <SectionTwoPictureCompound image={Pic3} />
              <SectionTwoPictureCompound image={Pic4} />
            </div>
            <div className="best-seller-small flex-col justify-center iphone:flex-row">
              <SectionTwoPictureCompound image={Pic2} />
              <SectionTwoPictureCompound image={Pic3} />
              <SectionTwoPictureCompound image={Pic4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCards1;
