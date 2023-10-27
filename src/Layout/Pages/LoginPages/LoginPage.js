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

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  //  kullanıcı seçimi

  const [selectedUser, setSelectedUser] = useState("customer");

  const changeUser = (e) => {
    const selectedValue = e.target.value;
    setSelectedUser(selectedValue);
  };

  const history = useHistory();
  const [roles, setRoles] = useState({});
  const [data, getRoles, loading, err] = useAxios({
    reqType: "get",
    endpoint: "roles",
  });

  const onSubmit = (formData) => {
    console.log(formData);

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
  };

  useEffect(() => {
    getRoles()
      .then((res) => {
        console.log(res);
        setRoles(res);
      })
      .catch((err) => console.log(err));
  }, []);
  // roller alındı select kısmına yazılacak!!

  return (
    <div>
      <AboutPageHeader />
      <form
        className="h-[45rem] flex flex-col items-center justify-start p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="login-div">
          <label className="login-label">
            <span className="px-6 text-xl">İsim :</span>
            <input
              className="login-input"
              placeholder="İsim giriniz..."
              {...register("name", {
                required: "İsim alanı doldurulmak zorundadır.",
                minLength: {
                  value: 3,
                  message: "İsminiz 3 harften kısa olamaz.",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-900 text-center">
                * {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="login-div">
          <label className="login-label">
            <span className="px-6 text-xl">Email :</span>

            <input
              className="login-input"
              {...register("email", {
                required: "Email alanı doldurulmak zorundadır.",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email adresi geçerli değildir.",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-900 text-center">
                * {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="login-div">
          <label className="login-label">
            <span className="px-6 text-xl">Password :</span>
            <input
              className="login-input"
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
              <span className="text-red-900 text-center">
                * {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <div className="login-div flex items-center justify-around">
          <span className="px-6 text-xl">Kullanıcı seçiniz :</span>

          <select
            className="border w-32 h-10 rounded-3xl p-2"
            {...register("role_id")}
            value={selectedUser}
            onChange={changeUser}
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
            <option value="store">Store</option>
          </select>
        </div>
        {selectedUser === "store" && (
          <div className="login-div">
            <label className="login-label">
              <span className="px-6 text-xl">Name :</span>
              <input
                className="login-input"
                {...register("store.name", {
                  required: true,
                })}
              />
            </label>
            <label className="login-label">
              <span className="px-6 text-xl">Tax ID :</span>
              <input
                className="login-input"
                {...register("store.tax_no", {
                  required: true,
                })}
              />
            </label>
            <label className="login-label">
              <span className="px-6 text-xl">Bank Account :</span>
              <input
                className="login-input"
                {...register("store.bank_account", {
                  required: true,
                })}
              />
            </label>
          </div>
        )}
        <button className="border w-32 h-10 rounded-3xl p-2">Submit</button>
      </form>
      <AboutPageFooter />
    </div>
  );
};

export default LoginPage;
