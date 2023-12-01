import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProductListHeader from "../ProductListPageComponents/ProductListHeader";
import { useHistory } from "react-router-dom";

const ProductsPageHeader = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col">
      <ProductListHeader />
      <div className="w-full h-24 bg-secondary flex justify-center items-center">
        <div className="flex iphone:w-[65.625rem] h-[2.75rem] justify-start">
          <button
            onClick={() => history.goBack()}
            className="flex items-center gap-x-4"
          >
            <span className="bg-gray-300 p-2 px-3.5 rounded-full hover:bg-gray-600 hover:text-white transition-colors duration-500">
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageHeader;
