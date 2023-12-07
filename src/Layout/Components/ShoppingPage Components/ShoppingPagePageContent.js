import {
  faAngleRight,
  faCartShopping,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../../redux/features/thunk/fetchProducts";
import ShoppingList from "../../Compounds/GlobalCompounds/ShoppingList";
import ListCardCompound from "../../Compounds/ProductListPageCompounds/ListCardCompound";

const ShoppingPagePageContent = () => {
  const products = useSelector((state) => state.product.productList);
  const cart = useSelector((state) => state.shopping.cart);

  const dispatch = useDispatch();

  const cartSum = (cart) => {
    let totalPrice = 0;
    cart?.map((product) => {
      return (totalPrice += product.price * product.cartQuantity);
    });
    return Number(totalPrice.toFixed(2));
  };

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
        <div className="flex gap-x-8">
          <div className="flex flex-col gap-y-4 text-left flex-1">
            <p className="text-xl">Sepetim ( {cart?.length} Ürün )</p>
            <hr />
            {cart?.map((product, index) => (
              <ShoppingList product={product} key={index} />
            ))}
          </div>
          <div className="flex flex-col gap-y-2 my-10">
            <button className="border bg-primary text-white py-2 rounded-lg flex justify-center items-center gap-x-1">
              Sepeti Onayla
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <div className="border flex flex-col text-left px-6 rounded-xl">
              <h4 className="text-xl">Sipariş Özeti</h4>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-between my-1 w-full">
                  <p>Ürün Toplamı</p>
                  <p>{cartSum(cart)}₺</p>
                </div>
                <div className="flex justify-between my-1 w-full">
                  <p>Kargo Toplam</p>
                  <p>49.99₺</p>
                </div>
                <div className="flex my-1 w-full">
                  {cartSum(cart) > 150 && (
                    <div className="flex justify-between w-full items-center">
                      <p className="text-[.75rem] w-28">
                        150₺ üzeri kargo bedava
                      </p>
                      <p className="primary">-49.99₺</p>
                    </div>
                  )}
                </div>
              </div>
              <hr />
              <div className="flex justify-between my-1">
                <p>Toplam</p>
                {cartSum(cart) > 150 ? (
                  <p>{cartSum(cart)}₺</p>
                ) : (
                  <p>{(cartSum(cart) + 49.99).toFixed(2)}₺</p>
                )}
              </div>
            </div>
            <button className="border text-sm bg-gray-200 text-black py-2 px-10 rounded-lg flex justify-center items-center gap-x-1">
              <span className="primary">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span className="text-sm">INDIRIM KODU GIR</span>
            </button>
            <button className="border bg-primary text-white py-2 rounded-lg flex justify-center items-center gap-x-1">
              Sepeti Onayla
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingPagePageContent;
