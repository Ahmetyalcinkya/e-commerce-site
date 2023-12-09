import React from "react";
import { faAngleRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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
    history.push("/adress");
  };
  return (
    <div className="flex flex-col px-10 iphone:px-0 gap-y-2 my-10">
      <button
        disabled={cartSum(cart) === 0}
        onClick={redirectToAddress}
        className="border bg-primary text-white py-2 rounded-lg flex justify-center items-center gap-x-1"
      >
        {/* Behavior must fixed for two different components. */}
        Sepeti Onayla
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
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
      <button className="border text-sm bg-gray-200 text-black py-2 px-10 rounded-lg flex justify-center items-center gap-x-1">
        <span className="primary">
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <span className="text-sm">INDIRIM KODU GIR</span>
      </button>
      <button
        disabled={cartSum(cart) === 0}
        onClick={redirectToAddress}
        className="border bg-primary text-white py-2 rounded-lg flex justify-center items-center gap-x-1"
      >
        Sepeti Onayla
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default ShoppingInfo;
