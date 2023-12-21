import { Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  getCityCodes,
  getCityNames,
  getDistrictsOfEachCity,
} from "turkey-neighbourhoods";
import { setBillingAddress } from "../../../redux/features/shoppingCart/shoppingCartSlice";

const AddBillingAddress = ({ billingAddressHandler, setAddressBillComp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      title: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "all",
  });

  //şehir seçimi
  const [city, setCity] = useState("Adana");

  const citiesFunc = () => {
    const combined = [];
    const cityNames = getCityNames();
    const cityCodes = getCityCodes();
    for (let i = 0; i < cityNames.length; i++) {
      let cities = {
        cityCodes: cityCodes[i],
        cityNames: cityNames[i],
      };
      combined.push(cities);
    }
    return combined;
  };

  const cities = citiesFunc();

  const findKeyByCity = (obj, value) => {
    for (let i = 0; i < obj.length; i++) {
      const current = obj[i];
      const foundItem = Object.keys(current).find((key) => {
        return current[key] === value;
      });

      if (foundItem) {
        return current;
      }
    }
    return null;
  };

  const selectedCity = findKeyByCity(cities, city);

  const changeCity = (e) => {
    const selectedValue = e.target.value;
    setCity(selectedValue);
  };

  // ilçe seçimi
  const [district, setDistrict] = useState("");

  const allDistricts = getDistrictsOfEachCity();

  const findSpecificDistrict = (districts, cityCode) => {
    if (districts.hasOwnProperty(cityCode)) {
      return districts[cityCode];
    }
  };

  const districts = findSpecificDistrict(allDistricts, selectedCity.cityCodes);

  const changeDistrict = (e) => {
    const selectedValue = e.target.value;
    setDistrict(selectedValue);
  };

  // onsubmit
  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (billingAddress) => {
    setLoad(true);
    setTimeout(() => {
      dispatch(setBillingAddress(billingAddress));
      setLoad(false);
      setAddressBillComp(false);
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="modal z-50">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2 className="font-bold text-center mb-2 primary">Adres Ekle</h2>
        <div className="flex gap-x-4">
          <div className="login-div">
            <label className="login-label">
              Adres Başlığı :
              <input
                className="login-input"
                placeholder="Adres başlığınızı giriniz..."
                {...register("title", {
                  required: "Adres başlığı girilmek zorundadır.",
                  minLength: {
                    value: 2,
                    message: "Adresiniz 2 harften kısa olamaz.",
                  },
                })}
              />
              {errors.title && (
                <span className="login-span">* {errors.title.message}</span>
              )}
            </label>
          </div>
          <div className="login-div">
            <label className="login-label">
              Telefon Numarası :
              <input
                className="login-input"
                placeholder="05XXXXXXXXX"
                {...register("phone", {
                  required: "Telefon alanı doldurulmak zorundadır.",
                  minLength: {
                    value: 8,
                    message: "Telefon numaranız 8 haneden kısa olamaz.",
                  },
                  maxLength: {
                    value: 13,
                    message: "Telefon numaranız 13 haneden uzun olamaz.",
                  },
                  pattern: {
                    value: /^05[0-9]{9}$/,
                    message: "Geçersiz telefon numarası.",
                  },
                })}
              />
              {errors.phone && (
                <span className="login-span">* {errors.phone.message}</span>
              )}
            </label>
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="login-div">
            <label className="login-label">
              İsim :
              <input
                className="login-input"
                placeholder="İsminizi giriniz..."
                {...register("name", {
                  required: "İsim alanı doldurulmak zorundadır.",
                  minLength: {
                    value: 3,
                    message: "İsminiz 3 harften kısa olamaz.",
                  },
                })}
              />
              {errors.name && (
                <span className="login-span">* {errors.name.message}</span>
              )}
            </label>
          </div>
          <div className="login-div">
            <label className="login-label">
              Soyisim :
              <input
                className="login-input"
                placeholder="Soyisminizi giriniz..."
                {...register("surname", {
                  required: "Soyisim alanı doldurulmak zorundadır.",
                  minLength: {
                    value: 3,
                    message: "Soyisminiz 3 harften kısa olamaz.",
                  },
                })}
              />
              {errors.surname && (
                <span className="login-span">* {errors.surname.message}</span>
              )}
            </label>
          </div>
        </div>
        <div className="flex gap-x-4 items-center flex-row-reverse">
          <div className="login-div">
            <label className="login-label">
              Mahalle :
              <input
                className="login-input"
                placeholder="Mahallenizi giriniz..."
                {...register("neighborhood", {
                  required: "Mahalle alanı doldurulmak zorundadır.",
                  minLength: {
                    value: 2,
                    message: "Mahalle isminiz 2 haneden kısa olamaz.",
                  },
                })}
              />
              {errors.neighborhood && (
                <span className="login-span">
                  * {errors.neighborhood.message}
                </span>
              )}
            </label>
          </div>
          <div className="flex flex-1 justify-around -mt-6">
            <div className="flex flex-col items-center justify-around">
              <label className="login-label">
                Şehir Seçiniz :
                <select
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5"
                  {...register("city")}
                  onChange={changeCity}
                >
                  {cities?.map((city) => (
                    <option key={city.cityCodes} value={city.cityNames}>
                      {city.cityNames}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex items-center justify-around">
              <label className="login-label">
                İlçe Seçiniz :
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5"
                  {...register("district")}
                  onChange={changeDistrict}
                >
                  {districts?.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="w-full h-24 text-left">
            <label className="login-label">
              Adres Bilgilerinizi Giriniz :
              <input
                className="login-input"
                placeholder="Adresinizi giriniz..."
                {...register("address", {
                  required: "Adres alanı doldurulmak zorundadır.",
                  minLength: {
                    value: 20,
                    message: "Adresiniz 20 haneden kısa olamaz.",
                  },
                })}
              />
              {errors.address && (
                <span className="login-span">* {errors.address.message}</span>
              )}
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-black hover:text-white border hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors duration-300"
            onClick={billingAddressHandler}
          >
            İptal Et
          </button>
          <button
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors duration-300"
            disabled={load}
          >
            {load === true ? <Spinner /> : "Kaydet"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBillingAddress;
