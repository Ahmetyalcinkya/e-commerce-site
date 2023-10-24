import React from "react";
import SectionTwoPictureCompound from "../../../Compounds/HomePageCompounds/SectionTwoPictureCompound";
import Pic1 from "../../../../Assets/h5-baner-3 1.png";
import Pic2 from "../../../../Assets/media bg-cover.png";
import Pic3 from "../../../../Assets/media bg-cover (1).png";
import Pic4 from "../../../../Assets/card-cover-5 (1).jpg";
import { Icon } from "../../../../Icons/icons";

const ProductCards2 = () => {
  return (
    <section className="w-full h-[187.5rem] iphone:h-[55.938rem] flex">
      <div className="flex w-full flex-col-reverse iphone:flex-row iphone:w-[67.375rem] m-auto justify-between">
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
              <SectionTwoPictureCompound image={Pic1} />
              <SectionTwoPictureCompound image={Pic2} />
              <SectionTwoPictureCompound image={Pic3} />
            </div>
            <div className="best-seller-small flex-col justify-center iphone:flex-row">
              <SectionTwoPictureCompound image={Pic1} />
              <SectionTwoPictureCompound image={Pic2} />
              <SectionTwoPictureCompound image={Pic3} />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Pic4} alt="" />
          <div className="absolute top-5 left-5 flex flex-col">
            <h6 className="font-bold text-sm leading-6 tracking-wider">
              FURNITURE
            </h6>
            <h6 className="font-bold text-sm leading-6 tracking-wider	text-secondary text-left">
              5 Items
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCards2;
