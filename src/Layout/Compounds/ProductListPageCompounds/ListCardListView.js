import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCart } from "../../../redux/features/shoppingCart/shoppingCartSlice";

const ListCardListView = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(setCart(product));
  };
  return (
    <div className="iphone:w-[65rem] iphone:h-20 flex flex-col iphone:flex-row justify-between border-2 rounded-xl shadow-xl hover:scale-105 duration-200 items-center my-3 py-4 iphone:py-0">
      <Link
        to={`/product/${product.id}/${product.name
          .toLowerCase()
          .replaceAll(" ", "-")}`}
        className="flex flex-col iphone:flex-row gap-y-2 iphone:gap-y-0 justify-between items-center p-2 flex-1 text-center iphone:text-left gap-x-4 "
      >
        <img
          src={product?.images[0]?.url}
          alt=""
          className="h-16 w-16 object-cover"
        />
        <h5 className="text-base font-bold text-quaternary iphone:w-60">
          {product?.name}
        </h5>
        <p className="font-bold leading-tight tracking-wider text-secondary w-80 overflow-x-hidden line-clamp-1">
          {product?.description}
        </p>
        <h5 className="font-bold w-20 text-center">{product?.price} ₺</h5>
        <div className="flex">
          <button className="w-4 h-4 bg-[#23A6F0] rounded-full mr-2"></button>
          <button className="w-4 h-4 bg-[#23856D] rounded-full mr-2"></button>
          <button className="w-4 h-4 bg-[#E77C40] rounded-full mr-2"></button>
          <button className="w-4 h-4 bg-[#252B42] rounded-full mr-2"></button>
        </div>
      </Link>
      <div className="w-52 flex justify-between gap-x-0.5 h-10 items-center px-2">
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 h-full">
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
        <button
          onClick={addToCart}
          className="rounded-md p-1 text-white bg-[#23A6F0]/95 font-bold h-full hover:bg-[#252B42]/95 transition-colors"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ListCardListView;
