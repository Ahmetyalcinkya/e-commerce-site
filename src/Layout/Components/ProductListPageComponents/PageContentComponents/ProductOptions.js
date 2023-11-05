import React from "react";
import { Icon } from "../../../../Icons/icons";
import FilterDropdown from "../../../Compounds/ProductListPageCompounds/FilterDropdown";
import ProductSearch from "../../../Compounds/ProductListPageCompounds/ProductSearch";

const ProductOptions = () => {
  return (
    <div className="w-full h-56 iphone:h-24 row-centered">
      <div className="iphone:w-[65.625rem] flex-col iphone:flex-row justify-around h-full flex items-center iphone:justify-between">
        <h6 className="font-bold text-sm text-[#737373]">
          Showing all 12 results
        </h6>
        <div className="flex items-center gap-x-4">
          <h6 className="font-bold text-sm text-secondary">Views:</h6>
          <div className="flex gap-x-4">
            <button className="w-12 h-12 row-centered border">
              <Icon name="list1" />
            </button>
            <button className="w-12 h-12 row-centered border">
              <Icon name="list2" />
            </button>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <ProductSearch />
          <FilterDropdown />
          <button className="w-24 h-[3.125rem] text-white bg-primary rounded">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
