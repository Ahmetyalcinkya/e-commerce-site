import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAxios } from "../../../hooks/useAxios";
import { AxiosWithAuth } from "../../../utilities/axiosWithAuth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import AboutPageHeader from "../../Components/AboutPage Components/AboutPageHeader";
import AboutPageFooter from "../../Components/AboutPage Components/AboutPageFooter";
import { Spinner } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  //  kullanıcı seçimi

  const [selectedUser, setSelectedUser] = useState("3");

  const changeUser = (e) => {
    const selectedValue = e.target.value;
    setSelectedUser(selectedValue);
  };

  const history = useHistory();
  const [roles, setRoles] = useState(null);
  const [data, getRoles, loading, err] = useAxios({
    reqType: "get",
    endpoint: "roles",
  });

  const onSubmit = (formData) => {
    console.log(formData);
    setTimeout(() => {
      AxiosWithAuth()
        .post("signup", formData)
        .then((res) => {
          toast.success(
            "You need to click link in email to activate your account!"
          );
          history.goBack();
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
          toast.error("An error was encountered while logging in!");
        });
    }, 2000);
  };

  useEffect(() => {
    getRoles()
      .then((res) => {
        console.log(res);
        setRoles(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AboutPageHeader />
      <div className="pt-10 flex flex-col justify-around items-center h-24 bg-secondary">
        <h1 className="font-bold text-4xl leading-[3rem] text-quaternary">
          Sign Up
        </h1>
        <p>
          Already a member ?{" "}
          <Link to="/login" className="primary">
            Log in
          </Link>
        </p>
      </div>
      <form
        className="bg-secondary flex flex-col items-center justify-between p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            Email :
            <input
              className="login-input"
              placeholder="E-mail adresinizi giriniz..."
              {...register("email", {
                required: "Email alanı doldurulmak zorundadır.",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email adresi geçerli değildir.",
                },
              })}
            />
            {errors.email && (
              <span className="login-span">* {errors.email.message}</span>
            )}
          </label>
        </div>
        <div className="login-div">
          <label className="login-label">
            Password :
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="Şifrenizi giriniz..."
              {...register("password", {
                required: "Lütfen şifrenizi giriniz.",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                  message:
                    "Şifreniz büyük harf, küçük harf, sayı ve özel karakter içermelidir.",
                },
              })}
            />
            {errors.password && (
              <span className="login-span">* {errors.password.message}</span>
            )}
          </label>
        </div>
        <div className="login-div">
          <label className="login-label">
            Validate Password :
            <input
              className="login-input"
              type="password"
              name="confirmPassword"
              placeholder="Şifrenizi giriniz..."
              // {...register("password", {
              //   required: "Lütfen şifrenizi giriniz.",
              // })}
            />
            {/* {errors.password && (
              <span className="login-span">* {errors.password.message}</span>
            )} */}
          </label>
        </div>
        <div className="login-div flex items-center justify-around">
          Kullanıcı seçiniz :
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5"
            {...register("role_id")}
            onChange={changeUser}
          >
            {roles?.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
        {selectedUser === "2" && (
          <div>
            <div className="login-div">
              <label className="login-label">
                Name :
                <input
                  className="login-input"
                  placeholder="Mağaza ismini giriniz..."
                  {...register("store.name", {
                    required: "Mağaza ismini giriniz.",
                  })}
                />
                {/* {errors.store.name && (
                <span className="login-span">
                  * {errors.store.name.message}
                </span>
              )} */}
              </label>
            </div>
            <div className="login-div">
              <label className="login-label">
                Tax ID :
                <input
                  className="login-input"
                  placeholder="TXXXXVXXXXXX"
                  {...register("store.tax_no", {
                    required: "Vergi numaranızı giriniz.",
                    pattern: {
                      value: /[1-9](\d{9})([0,2,4,6,8]{1})/,
                      message: "Geçerli bir vergi numarası giriniz.",
                    },
                  })}
                />
                {/* {errors.store.tax_no && (
                <span className="login-span">
                  * {errors.store.tax_no.message}
                </span>
              )} */}
              </label>
            </div>
            <div className="login-div">
              <label className="login-label">
                Bank Account :
                <input
                  className="login-input"
                  placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXX"
                  {...register("store.bank_account", {
                    required: "Iban adresinizi giriniz.",
                    pattern: {
                      value:
                        /TR[a-zA-Z0-9]{2}\s?([0-9]{4}\s?){1}([0-9]{1})([a-zA-Z0-9]{3}\s?)([a-zA-Z0-9]{4}\s?){3}([a-zA-Z0-9]{2})\s?/,
                      message: "Geçerli bir iban adresi giriniz.",
                    },
                  })}
                />
                {/* {errors.store.bank_account && (
                <span className="login-span">
                  * {errors.store.bank_account.message}
                </span>
              )} */}
              </label>
            </div>
          </div>
        )}
        <button
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          disabled={loading}
        >
          {loading === true ? <Spinner /> : "Submit"}
        </button>
      </form>
      <AboutPageFooter />
    </div>
  );
};

export default RegisterPage;
