import React, { useState } from "react";
import ShoppingInfo from "../../Compounds/GlobalCompounds/ShoppingInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faPlus } from "@fortawesome/free-solid-svg-icons";
import AddAddress from "../../Compounds/GlobalCompounds/AddAddress";

const AddressPagePageContent = () => {
  const [addressComp, setAddressComp] = useState(false);

  const addressHandler = () => {
    setAddressComp(!addressComp);
  };

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
          <button
            onClick={addressHandler}
            className="flex flex-col items-center flex-1 border gap-y-2 p-2 rounded-lg hover:bg-gray-100 duration-200 transition-colors"
          >
            <span className="primary">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <h4>Yeni Adres Ekle</h4>
            {/* adres verisi buraya çekilmeli */}
          </button>
          {addressComp && <AddAddress addressHandler={addressHandler} />}
        </div>
      </div>
      <ShoppingInfo />
    </div>
  );
};

export default AddressPagePageContent;
