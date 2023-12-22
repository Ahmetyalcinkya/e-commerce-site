import React from "react";
import { useSelector } from "react-redux";
import ShoppingInfo from "../../Compounds/GlobalCompounds/ShoppingInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const PaymentPagePageContent = () => {
  const billingAddress = useSelector(
    (state) => state.shopping.selected_billing_address
  );
  const userAddress = useSelector((state) => state.shopping.selected_address);
  return (
    <div className="w-full iphone:w-[65.625rem] m-auto flex flex-col iphone:flex-row gap-x-8">
      <div className="flex flex-col gap-y-4 text-left flex-1 px-3 iphone:px-0">
        <p className="text-xl">Ödeme Seçenekleri</p>
        <hr />
        <div className="flex border-2 rounded-md">
          <div className="w-1/2 flex flex-col border-r py-2 px-4">
            <h3>Adres Bilgileri</h3>
            <h4>{userAddress.title}</h4>
            <div className="flex">
              <h4 className="font-bold">{userAddress.city}</h4> /{" "}
              <h4>{userAddress.district}</h4> /
              <h4>{userAddress.neighborhood}</h4>
            </div>
            <p>{userAddress.address}</p>
          </div>
          <div className="w-1/2 flex flex-col py-2 px-4">
            <h3>Fatura Adres Bilgileri</h3>
            <h4>{billingAddress.title}</h4>
            <div className="flex">
              <h4 className="font-bold">{billingAddress.city}</h4> /{" "}
              <h4>{billingAddress.district}</h4> /
              <h4>{billingAddress.neighborhood}</h4>
            </div>
            <p>{billingAddress.address}</p>
          </div>
        </div>
        <div className="w-full border-2 rounded-lg px-4 py-2 flex items-center gap-x-2">
          <span className="primary">
            <FontAwesomeIcon icon={faCircleExclamation} size="xl" />
          </span>
          Banka/Kredi Kartı veya Alışveriş Kredisi ile ödemenizi güvenle
          yapabilirsiniz.
        </div>
        <div className="w-full border-2 rounded-lg p-4 flex flex-col gap-y-3">
          <div className="flex flex-col justify-start">
            <h4 className="text-2xl">Kart ile Öde</h4>
            <h4 className="text-sm">
              Banka veya Kredi Kartı kullanarak ödemenizi güvenle
              yapabilirsiniz.
            </h4>
            <hr className="my-2" />
          </div>
          <div className="flex">
            <div className="flex gap-y-3 flex-col w-1/2 border-r">
              <div className="flex px-4 justify-between items-center mb-4">
                <h4>Kart Bilgileri</h4>
                <button className="flex flex-col items-center text-sm underline">
                  <h4>Kayıtlı kartlarımla ödeme yap</h4>
                </button>
              </div>
              <label className="flex flex-col px-4 text-sm gap-y-1">
                Kart Numarası
                <input type="text" className="rounded-lg" />
              </label>
              <div className="flex w-full justify-between items-center">
                <label
                  htmlFor=""
                  className="flex flex-col text-sm gap-y-1 px-4"
                >
                  <h4>Son Kullanma Tarihi</h4>
                  <div className="flex gap-x-4">
                    <select name="" id="" className="rounded-md">
                      <option disabled selected>
                        Ay
                      </option>
                    </select>
                    <select name="" id="" className="rounded-md">
                      <option disabled selected>
                        Yıl
                      </option>
                    </select>
                  </div>
                </label>
                <label
                  htmlFor=""
                  className="flex justify-center flex-col w-36 text-sm"
                >
                  <h4>CVV</h4>
                  <input type="text" className="w-1/2 rounded-md" />
                </label>
              </div>
              <label
                htmlFor=""
                className="flex items-center text-[.75rem] px-4 gap-x-1"
              >
                <input type="checkbox" name="" id="" className="rounded" />
                <h4 className="flex gap-x-1">
                  <span className="primary">
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </span>
                  3D Secure ile ödemek istiyorum
                </h4>
              </label>
            </div>
            <div className="w-1/2 flex flex-col px-4 mb-4 gap-y-2">
              <h4>Taksit Seçenekleri</h4>
              <h4 className="text-sm">
                Kartınıza uygun taksit seçeneğini seçiniz
              </h4>
              <div className="w-full border rounded-md p-2 flex flex-col">
                <div className="flex border-b mb-1">
                  <h4 className="flex-1 border-r flex justify-center">
                    Taksit Sayısı
                  </h4>
                  <h4 className="flex-1 flex justify-center">Aylık Ödeme</h4>
                </div>
                <div className="flex justify-center items-center gap-x-2 px-4 py-1">
                  <input type="radio" />
                  <h4 className="flex-1 flex justify-start">Tek Çekim</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-2 rounded-lg p-4 flex flex-col gap-y-3">
          <div className="flex justify-start items-center">
            <h4 className="text-2xl">Sözleşmeler ve Formlar</h4>
          </div>
          <div className="flex flex-wrap">
            <button className="flex flex-col items-center flex-1 border gap-y-2 p-2 rounded-lg hover:bg-gray-100 duration-200 transition-colors">
              <span className="primary"></span>
              <h4>Sözleşmeler</h4>
            </button>
          </div>
        </div>
      </div>
      <ShoppingInfo />
    </div>
  );
};

export default PaymentPagePageContent;
