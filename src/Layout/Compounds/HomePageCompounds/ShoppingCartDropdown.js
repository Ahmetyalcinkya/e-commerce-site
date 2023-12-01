import { Popover, Transition } from "@headlessui/react";
import { Link } from "@mui/material";
import React, { Fragment } from "react";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";

const ShoppingCartDropdown = () => {
  const cart = useSelector((state) => state.shopping.cart);
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
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
            <div className="relative grid gap-2 bg-white p-2 w-full">
              {cart?.length === 0 ? (
                <p>Sepetiniz boş.</p>
              ) : (
                cart?.map((product) => (
                  <Link
                    to={`/product/${product.id}/${product.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    key={product?.id}
                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white iphone:h-12 iphone:w-12">
                      {product?.images[0]?.url}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {product?.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {product?.description}
                      </p>
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
