import React from "react";
import { Link } from "react-router-dom";

const ListCardCompound = ({ product }) => {
  return (
    <div className="flex gap-x-8 flex-col w-60 border-2 rounded-xl shadow-xl hover:scale-105 duration-200 my-4">
      <Link
        to={`/product/${product.id}/${product.name
          .toLowerCase()
          .replaceAll(" ", "-")}`}
        className="flex flex-col h-[30rem] justify-around items-center p-2"
      >
        <img src={product?.images[0]?.url} alt="" className="rounded-xl" />
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
      <div className="w-full flex justify-between gap-x-0.5 h-10 items-center">
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-bl-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5 h-full">
          {/* size options will be added */}
          <option value="" selected disabled>
            Size
          </option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <button className="flex-1 rounded-br-xl p-1 text-white bg-[#23A6F0]/95 font-bold h-full hover:bg-[#252B42]/95 transition-colors">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ListCardCompound;
