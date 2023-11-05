import React from "react";
import { Link } from "react-router-dom";

const CategoryCardCompound = ({ category }) => {
  return (
    <Link to={`/shopping/${category.code}`} className="relative">
      <img
        src={category.img}
        alt=""
        className="w-[19rem] h-[19rem] iphone:w-[13rem] iphone:h-[14rem]"
      />
      <div className="absolute top-32 left-32 iphone:top-20 iphone:left-20 text-white">
        <h5 className="font-bold text-base">CLOTHS</h5>
        <p className="text-sm ">5 Items</p>
      </div>
    </Link>
  );
};

export default CategoryCardCompound;
