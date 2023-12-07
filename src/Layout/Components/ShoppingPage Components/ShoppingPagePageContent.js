import {
  faCartShopping,
  faCube,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListCardCompound from "../../Compounds/ProductListPageCompounds/ListCardCompound";
import { fetchProducts } from "../../../redux/features/thunk/fetchProducts";
import {
  deleteFromCart,
  resetCart,
  setCart,
} from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { toast } from "react-toastify";

const ShoppingPagePageContent = () => {
  const products = useSelector((state) => state.product.productList);
  const cart = useSelector((state) => state.shopping.cart);

  const dispatch = useDispatch();
  console.log(cart);

  useEffect(() => {
    products?.length === 0 && dispatch(fetchProducts());
  }, [products]);
  return (
    <div className="w-full iphone:w-[65.625rem] m-auto">
      {cart.length == 0 ? (
        <div className="flex flex-col justify-around gap-y-12 pt-8 px-2 iphone:px-0">
          <div className="flex items-center justify-between w-full border-2 gap-x-4 iphone:gap-x-0 py-3 px-6 iphone:px-8 rounded-xl">
            <div className="flex justify-center items-center gap-x-4">
              <div className="bg-primary p-4 rounded-full flex items-center justify-center text-white">
                <FontAwesomeIcon icon={faCartShopping} size="2xl" />
              </div>
              <p className="font-bold">Sepetinizde ürün bulunmamaktadır.</p>
            </div>
            <Link
              to="/shopping"
              className="bg-primary py-3 px-6 rounded-lg text-white"
            >
              Alışverişe Başla
            </Link>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-left">ÜRÜNLERİMİZE GÖZ ATIN</p>
            <hr />
            <div className="flex flex-col iphone:flex-row flex-wrap w-full justify-around items-center">
              {products?.slice(0, 4).map((product, index) => (
                <ListCardCompound key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4 text-left">
          <p className="text-xl">Sepetim ( {cart?.length} Ürün )</p>
          <hr />
          {cart?.map((product) => (
            <div className="border rounded-xl">
              {product?.price * product?.cartQuantity > 150 && (
                <div className="w-full bg-green-200 flex gap-x-2 items-center justify-center py-1 rounded-t-xl">
                  <span className=" text-green-600">
                    <FontAwesomeIcon icon={faCube} />
                  </span>
                  <span className="text-black">Kargo Bedava!</span>
                </div>
              )}
              <div className="flex items-center justify-around ">
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded-md checked:bg-green-400"
                />
                <img
                  src={product.images[0].url}
                  alt=""
                  className="w-24 h-full p-3"
                />
                <div className="flex flex-col text-left gap-y-1">
                  <h4 className="text-[.75rem] line-clamp-1 w-96">
                    <span className="font-bold">{product?.name}</span> /{" "}
                    <span>{product?.description}</span>
                  </h4>
                  <h4 className="text-[0.75rem] line-clamp-1 w-96">
                    Yarın kargoda
                  </h4>
                </div>
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
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingPagePageContent;
