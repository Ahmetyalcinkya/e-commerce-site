import { faCube, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  deleteFromCart,
  resetCart,
  setCart,
  productChecked,
} from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShoppingList = ({ product, index }) => {
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(product.checked);

  return (
    <div key={index} className="border rounded-xl">
      {product?.price * product?.cartQuantity > 150 && (
        <div className="w-full bg-green-200 flex gap-x-2 items-center justify-center py-1 rounded-t-xl">
          <span className=" text-green-600">
            <FontAwesomeIcon icon={faCube} />
          </span>
          <span className="text-black">Kargo Bedava!</span>
        </div>
      )}
      <div className="flex items-center justify-around flex-col iphone:flex-row gap-y-2 iphone:gap-y-0 py-3 iphone:py-0">
        <input
          type="checkbox"
          className="w-6 h-6 rounded-md checked:bg-green-400"
          onChange={() => {
            setChecked(!isChecked);
            dispatch(productChecked(product));
          }}
          checked={isChecked}
        />
        <img
          src={product?.images[0].url}
          alt=""
          className="w-48 iphone:w-24 h-full p-3"
        />
        <Link
          to={`/product/${product.id}/${product.name
            .toLowerCase()
            .replaceAll(" ", "-")}`}
          key={product?.id}
          className="w-full iphone:w-96 flex flex-col text-center iphone:text-left gap-y-2 iphone:gap-y-1"
        >
          <h4 className="text-[.75rem] line-clamp-1 w-full iphone:w-96">
            <span className="font-bold">{product?.name}</span> /{" "}
            <span>{product?.description}</span>
          </h4>
          <h4>Beden : {product?.size}</h4>
          <h4 className="text-[0.75rem] line-clamp-1">Yarın kargoda</h4>
        </Link>
        <div className="flex gap-x-3 bg-gray-100 border rounded-md items-center">
          <button
            onClick={() => {
              dispatch(deleteFromCart(product));
              if (product?.cartQuantity > 1) {
                toast.error("Ürün sepetinizden çıkarıldı.");
              } else {
                toast("Ürün sepetinizden kaldırıldı.");
              }
            }}
            className="bg-gray-300 px-2 py-1 rounded-l-md"
          >
            -
          </button>
          {product?.cartQuantity}
          <button
            onClick={() => {
              dispatch(setCart(product));
              setChecked(true);
              toast.success("Ürün sepetinize eklendi.");
            }}
            className="bg-gray-300 px-2 py-1 rounded-r-md"
          >
            +
          </button>
        </div>
        <h3 className="font-bold">
          {(product?.price * product?.cartQuantity).toFixed(2)} ₺
        </h3>
        <button
          onClick={() => {
            dispatch(resetCart(product));
            toast("Ürün sepetinizden kaldırıldı.");
          }}
          className="text-white bg-green-300 p-1 px-2 rounded-full hover:bg-red-200 hover:text-red-500 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;
