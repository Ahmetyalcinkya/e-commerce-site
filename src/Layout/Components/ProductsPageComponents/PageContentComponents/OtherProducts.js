import React from "react";
import products from "../../../../Data/products";
import ProductListCardCompound from "../../../Compounds/ProductPageCompounds/ListCardCompound copy";
import Pic2 from "../../../../Assets/product-cover-5 (4).png";

const OtherProducts = () => {
  return (
    <div className="w-full iphone:h-[68rem] bg-secondary row-centered">
      <div className="w-full iphone:w-[65.625rem] h-[260rem] iphone:h-full flex flex-col justify-around iphone:justify-center text-left">
        <div className="w-full h-20 flex flex-col justify-around">
          <h3 className="font-bold text-2xl text-center iphone:text-left">
            BESTSELLER PRODUCTS
          </h3>
          <hr className="m-2 w-full" />
        </div>
        <div className="flex flex-col iphone:flex-row flex-wrap w-full justify-around items-center">
          {new Array(2).fill(
            products.map((product) => (
              <ProductListCardCompound product={product} image={Pic2} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
