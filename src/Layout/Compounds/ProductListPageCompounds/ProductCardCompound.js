import React from "react";

const ProductCardCompound = ({ image }) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt=""
        className="w-[19rem] h-[19rem] iphone:w-[13rem] iphone:h-[14rem]"
      />
      <div className="absolute top-32 left-32 iphone:top-20 iphone:left-20 text-white">
        <h5 className="font-bold text-base">CLOTHS</h5>
        <p className="text-sm ">5 Items</p>
      </div>
    </div>
  );
};

export default ProductCardCompound;
