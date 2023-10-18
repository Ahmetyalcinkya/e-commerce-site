import React from "react";
import ProductListHeader from "../ProductListPageComponents/ProductListHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ProductsPageHeader = () => {
  return (
    <div className="flex flex-col">
      <ProductListHeader />
      <div className="w-full h-24 bg-[#FAFAFA] flex justify-center items-center">
        <div className="flex w-[65.625rem] h-[2.75rem] justify-start">
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
    </div>
  );
};

export default ProductsPageHeader;
