import React from "react";
import { Link } from "react-router-dom";

const ListCardCompound = ({ product }) => {
  return (
    <div className="flex gap-x-8">
      <Link
        to={`shopping/${product.id}`}
        className="flex flex-col w-60 h-[30rem] justify-around items-center"
      >
        {/* <img src={image} alt="" /> */}
        <h5 className="text-base font-bold text-quaternary">{product?.name}</h5>
        <a
          href="#"
          className="font-bold leading-tight tracking-wider text-secondary"
        >
          {product?.description}
        </a>
        <h5 className="font-bold">
          {product?.price}
          {/* <span className="ml-1 text-tertiary font-bold">
            {product?.productSpanPrice}
          </span> */}
        </h5>
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
