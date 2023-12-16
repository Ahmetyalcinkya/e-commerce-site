import {
  faCircleExclamation,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AxiosWithAuth } from "../../../utilities/axiosWithAuth";
import AddAddress from "../../Compounds/GlobalCompounds/AddAddress";
import ShoppingInfo from "../../Compounds/GlobalCompounds/ShoppingInfo";
import { toast } from "react-toastify";

const AddressPagePageContent = () => {
  const address = useSelector((state) => state.shopping.address);
  const [addressComp, setAddressComp] = useState(false);
  const addressHandler = () => {
    setAddressComp(!addressComp);
  };

  const deleteUserAddress = (id) => {
    AxiosWithAuth()
      .delete(`user/address/${id}`)
      .then((res) => {
        toast.success("Adres başarıyla silindi!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Adres silinemedi!");
      });
  }; // delete çalışmıyor

  return (
    <div className="w-full iphone:w-[65.625rem] m-auto flex flex-col iphone:flex-row gap-x-8">
      <div className="flex flex-col gap-y-4 text-left flex-1 px-3 iphone:px-0">
        <p className="text-xl">Adres Bilgilerim</p>
        <hr />
        <div className="w-full border-2 rounded-lg px-4 py-2 flex items-center gap-x-2">
          <span className="primary">
            <FontAwesomeIcon icon={faCircleExclamation} size="xl" />
          </span>
          Kurumsal faturalı alışveriş yapmak için "Faturamı aynı adrese gönder"
          tikini kaldırın ve fatura adresi olarak kayıtlı kurumsal fatura
          adresinizi seçin.
        </div>
        <div className="w-full border-2 rounded-lg p-4 flex flex-col gap-y-3">
          <div className="flex justify-between items-center">
            <h4>Teslimat Adresi</h4>
            <div className="flex gap-x-1 items-center">
              <input
                type="checkbox"
                className="w-6 h-6 rounded-md cursor-pointer"
                // checked setter
              />
              <h4>Faturamı aynı adrese gönder.</h4>
            </div>
          </div>
          <div className="flex flex-wrap">
            <button
              onClick={addressHandler}
              className="flex flex-col items-center flex-1 border gap-y-2 p-2 rounded-lg hover:bg-gray-100 duration-200 transition-colors"
            >
              <span className="primary">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <h4>Yeni Adres Ekle</h4>
            </button>
          </div>
          <div className="flex w-full flex-wrap justify-between gap-y-3">
            {address?.length !== 0 &&
              address?.length !== undefined &&
              address?.map((address, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-start items-center border gap-y-2 p-2 rounded-lg hover:bg-gray-100 duration-200 transition-colors w-[23rem]"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex gap-x-2 items-center">
                      <input type="checkbox" className="cursor-pointer" />
                      <h4>{address.title}</h4>
                    </div>
                    <button
                      // onClick={deleteUserAddress(address.id)}
                      className="text-white bg-primary p-1 px-2 rounded-full hover:bg-red-200 hover:text-red-500 transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                  <div className="flex gap-x-2 w-full font-bold">
                    <h4>{address.city}</h4> / <h4>{address.district}</h4>/{" "}
                    <h4>{address.neighborhood}</h4>
                  </div>
                  <div className="flex gap-x-2 w-full">
                    <h4>{address.name}</h4> / <h4>{address.surname}</h4>
                  </div>
                  <div className="flex gap-x-2 w-full">
                    <h4>{address.phone}</h4>
                  </div>
                  <div className="flex gap-x-2 w-full">
                    <h4>{address.address}</h4>
                  </div>
                </div>
              ))}
          </div>
          {addressComp && (
            <AddAddress
              addressHandler={addressHandler}
              setAddressComp={setAddressComp}
            />
          )}
        </div>
      </div>
      <ShoppingInfo />
    </div>
  );
};

export default AddressPagePageContent;
