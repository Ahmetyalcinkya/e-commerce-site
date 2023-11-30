import React from "react";
import { useSelector } from "react-redux";
import ListCardCompound from "../../../Compounds/ProductListPageCompounds/ListCardCompound";

const OtherProducts = () => {
  const products = useSelector((state) => state.product.productList);

  return (
    <div className="w-full iphone:h-[77rem] bg-secondary column-centered">
      <div className="w-full iphone:w-[65.625rem] h-[260rem] iphone:h-full flex flex-col justify-around iphone:justify-center text-left">
        <div className="w-full h-20 flex flex-col justify-around">
          <h3 className="font-bold text-2xl text-center iphone:text-left">
            BESTSELLER PRODUCTS
          </h3>
          <hr className="m-2 w-full" />
        </div>
        <div className="flex flex-col iphone:flex-row flex-wrap w-full justify-around items-center">
          {products?.slice(0, 8).map((product, index) => (
            <ListCardCompound key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
