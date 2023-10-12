import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Pic1 from "../../../Assets/media bg-cover (2).png";
import ProductCardCompound from "../../Compounds/ProductListPageCompounds/ProductCardCompound";

const ProductListPageContent = () => {
  return (
    <div>
      <section className="flex flex-col bg-[#FAFAFA] w-full">
        <div className="flex h-24 justify-center items-center">
          <div className="flex w-[65.625rem] h-[2.75rem] justify-between items-center">
            <h3 className="text-bold text-2xl text-[#252B42]">Shop</h3>
            <div className="flex items-center gap-x-4">
              <a href="#" className="text-[#252B42]">
                Home
              </a>
              <FontAwesomeIcon icon={faChevronRight} />
              <a href="#" className="text-[#BDBDBD]">
                Shop
              </a>
            </div>
          </div>
        </div>
        <div className="w-[68rem] h-72 flex mx-auto justify-center">
          <div className="flex gap-x-4">
            <ProductCardCompound image={Pic1} />
            <ProductCardCompound image={Pic1} />
            <ProductCardCompound image={Pic1} />
            <ProductCardCompound image={Pic1} />
            <ProductCardCompound image={Pic1} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductListPageContent;
