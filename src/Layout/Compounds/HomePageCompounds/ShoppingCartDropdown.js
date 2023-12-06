import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// QUANTITY SAYISINI DÜZENLE DISPATCH ILE
const ShoppingCartDropdown = () => {
  const cart = useSelector((state) => state.shopping.cart);
  const dispatch = useDispatch();
  return (
    <Popover className="relative">
      <Popover.Button>
        <BsCart2 size={28} color="#23A6F0" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 w-96">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative flex flex-col gap-2 bg-white p-2 w-full h-[24.5rem] overflow-y-scroll">
              {cart?.length === 0 ? (
                <p>Sepetiniz boş.</p>
              ) : (
                cart?.map((product) => (
                  <Link
                    to={`/product/${product.id}/${product.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    key={product?.id}
                    className="w-full flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                  >
                    <img
                      src={product?.images[0]?.url}
                      alt="product-pic"
                      className="flex h-10 w-10 shrink-0 items-center justify-center text-white iphone:h-full iphone:w-16"
                    />
                    <div className="ml-3 flex flex-col gap-y-1.5 text-left">
                      <p className="text-sm font-medium text-gray-900">
                        {product?.name}
                      </p>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {product?.description}
                      </p>
                      <div className="flex gap-x-3">
                        <p>Beden : {product?.cartQuantity}</p>
                        <p>Adet : {product?.cartQuantity}</p>
                      </div>
                      <div className="flex gap-x-2">
                        <button
                          onClick={() => dispatch(product.cartQuantity - 1)}
                          className="px-2 bg-gray-200 hover:bg-gray-600 hover:text-white transition-colors duration-300 rounded-full text-black"
                        >
                          -
                        </button>
                        <p className="text-sm text-gray-500">
                          {parseFloat(
                            (product?.price * product?.cartQuantity).toFixed(2)
                          )}{" "}
                          <span>₺</span>
                        </p>
                        <button
                          onClick={() => dispatch(product.cartQuantity + 1)}
                          className="px-2 bg-gray-200 hover:bg-gray-600 hover:text-white transition-colors duration-300 rounded-full text-black"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
            <div className="bg-gray-50 p-2 flex w-full h-full justify-around">
              <button className="flex-1 hover:bg-gray-300 p-2 rounded-md ">
                Ödemeye Geç
              </button>
              <button className="flex-1 hover:bg-gray-300 p-2 rounded-md ">
                Sepeti Görüntüle
              </button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ShoppingCartDropdown;
