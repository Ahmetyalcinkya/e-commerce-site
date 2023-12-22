import React from "react";
import { faAngleRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import DiscountCode from "./DiscountCode";

const ShoppingInfo = () => {
  const cart = useSelector((state) => state.shopping.cart);
  const history = useHistory();

  const cartSum = (cart) => {
    let totalPrice = 0;
    cart?.map((product) => {
      if (product.checked) {
        return (totalPrice += product.price * product.cartQuantity);
      }
    });
    return Number(totalPrice.toFixed(2));
  };

  const redirectToAddress = () => {
    history.push("/address");
  };
  const redirectToPayment = () => {
    history.push("/payment");
  };
  const redirectToSuccess = () => {
    history.push("/successful");
  };

  const path = window.location.pathname;
  return (
    <div className="flex flex-col px-10 iphone:px-0 gap-y-2 my-10">
      {path === "/cart" && (
        <button
          disabled={cartSum(cart) === 0}
          onClick={redirectToAddress}
          className="border bg-primary text-white py-2 rounded-lg flex justify-center items-center gap-x-1"
        >
          Sepeti Onayla
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      )}
      {path === "/address" && (
        <button
          onClick={redirectToPayment}
          className="border bg-primary text-white py-2 rounded-lg flex justify-center items-center gap-x-1"
        >
          Kaydet ve Devam Et
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      )}
      {path === "/payment" && (
        <button
          onClick={redirectToSuccess}
          disabled={cartSum(cart) === 0 ? true : false}
          className="border bg-primary text-white py-2 rounded-lg flex justify-center items-center gap-x-1"
        >
          Ödeme Yap
        </button>
      )}
      <div className="border flex flex-col text-left px-6 rounded-xl">
        <h4 className="text-xl">Sipariş Özeti</h4>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between my-1 w-full">
            <p>Ürün Toplamı</p>
            {cartSum(cart) === 0 ? <p>0.00₺</p> : <p>{cartSum(cart)}₺</p>}
          </div>
          <div className="flex justify-between my-1 w-full">
            <p>Kargo Toplam</p>
            {cartSum(cart) === 0 ? <p>0.00₺</p> : <p>49.99₺</p>}
          </div>
          <div className="flex my-1 w-full">
            {cartSum(cart) > 150 && (
              <div className="flex justify-between w-full items-center">
                <p className="text-[.75rem] w-28">150₺ üzeri kargo bedava</p>
                <p className="primary">-49.99₺</p>
              </div>
            )}
          </div>
        </div>
        <hr />
        <div className="flex justify-between my-1">
          <p>Toplam</p>
          {cartSum(cart) === 0 ? (
            <p>0.00₺</p>
          ) : cartSum(cart) > 150 ? (
            <p>{cartSum(cart)}₺</p>
          ) : (
            <p>{(cartSum(cart) + 49.99).toFixed(2)}₺</p>
          )}
        </div>
      </div>
      <DiscountCode />
      {path === "/cart" && (
        <button
          disabled={cartSum(cart) === 0}
          onClick={redirectToAddress}
          className="border bg-primary text-white py-2 rounded-lg flex justify-center items-center gap-x-1"
        >
          Sepeti Onayla
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      )}
      {path === "/address" && (
        <button
          onClick={redirectToPayment}
          className="border bg-primary text-white py-2 rounded-lg flex justify-center items-center gap-x-1"
        >
          Kaydet ve Devam Et
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      )}
      {path === "/payment" && (
        <button
          onClick={redirectToSuccess}
          disabled={cartSum(cart) === 0 ? true : false}
          className="border bg-primary text-white py-2 rounded-lg flex justify-center items-center gap-x-1"
        >
          Ödeme Yap
        </button>
      )}
    </div>
  );
};

export default ShoppingInfo;
