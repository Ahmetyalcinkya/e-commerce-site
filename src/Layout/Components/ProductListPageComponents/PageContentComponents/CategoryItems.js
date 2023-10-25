import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProductCardCompound from "../../../Compounds/ProductListPageCompounds/ProductCardCompound";
import Pic1 from "../../../../Assets/media bg-cover (2).png";

const CategoryItems = () => {
  return (
    <section className="flex flex-col h-[120rem] iphone:h-[23rem] justify-around bg-secondary w-full">
      <div className="h-[12rem] iphone:h-24 row-centered">
        <div className="w-full h-48 flex-col justify-around iphone:flex-row flex iphone:w-[65.625rem] iphone:h-[2.75rem] iphone:justify-between items-center">
          <h3 className="text-bold text-2xl text-quaternary">Shop</h3>
          <div className="flex items-center gap-x-4">
            <a href="#" className="text-quaternary">
              Home
            </a>
            <FontAwesomeIcon icon={faChevronRight} />
            <a href="#" className="text-fifth">
              Shop
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex-col iphone:flex-row iphone:w-[68rem] iphone:h-72 flex mx-auto justify-center">
        <div className="flex flex-col justify-around iphone:justify-center items-center iphone:flex-row gap-x-4 gap-y-4 iphone:gap-y-0">
          {new Array(5).fill(<ProductCardCompound image={Pic1} />)}
        </div>
      </div>
    </section>
  );
};

export default CategoryItems;
