import React from "react";

const ProductCardCompound = ({ image }) => {
  return (
    <div className="relative">
      <img src={image} alt="" />
      <div className="absolute top-20 left-20 text-white">
        <h5 className="font-bold text-base">CLOTHS</h5>
        <p className="text-sm ">5 Items</p>
      </div>
    </div>
  );
};

export default ProductCardCompound;
