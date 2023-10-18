import React from "react";
import { Link } from "react-router-dom";

const ProductListCardCompound = ({ image, product }) => {
  return (
    <div className="flex mb-4 shadow-md">
      <Link
        to={`${product.productId}`}
        className="flex flex-col w-60 h-[30rem] justify-around items-center bg-white"
      >
        <img src={image} alt="" />
        <div className="flex flex-col text-left justify-around h-32">
          <h5 className="text-base font-bold text-[#252B42]">
            {product?.productHeader}
          </h5>
          <a
            href="#"
            className="font-bold leading-tight tracking-wider text-[#737373]"
          >
            {product?.productDescription}
          </a>
          <h5 className="font-bold">
            {product?.productPrice}
            <span className="ml-1 text-[#23856D] font-bold">
              {product?.productSpanPrice}
            </span>
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default ProductListCardCompound;
