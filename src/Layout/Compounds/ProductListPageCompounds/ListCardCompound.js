import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ListCardCompound = ({ product }) => {
  return (
    <div className="flex gap-x-8">
      <Link
        to={`/product/${product.id}/${product.name
          .toLowerCase()
          .replaceAll(" ", "-")}`}
        className="flex flex-col w-60 h-[30rem] justify-around items-center my-4"
      >
        <img src={product?.images[0]?.url} alt="" />
        <h5 className="text-base font-bold text-quaternary">{product?.name}</h5>
        <p className="font-bold leading-tight tracking-wider text-secondary line-clamp-1">
          {product?.description}
        </p>
        <h5 className="font-bold">{product?.price}</h5>
        <div className="flex">
          <button className="w-4 h-4 bg-[#23A6F0] rounded-full mr-2"></button>
          <button className="w-4 h-4 bg-[#23856D] rounded-full mr-2"></button>
          <button className="w-4 h-4 bg-[#E77C40] rounded-full mr-2"></button>
          <button className="w-4 h-4 bg-[#252B42] rounded-full mr-2"></button>
        </div>
      </Link>
    </div>
  );
};

export default ListCardCompound;
