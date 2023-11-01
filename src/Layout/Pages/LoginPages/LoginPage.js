import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../Components/HomePageComponents/Header";
import ProductListFooter from "../../Components/ProductListPageComponents/ProductListFooter";
import { useHistory, Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../redux/features/thunk/fetchUser";
import { fetchStates } from "../../../redux/features/product/productSlice";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const dispatch = useDispatch();

  const onSubmit = (loginData) => {
    setTimeout(() => {
      dispatch(fetchUser(loginData));
    }, 2000);
  };

  const userFetching = useSelector(
    (state) => state.user.fetchStates === fetchStates.fetching
  );
  console.log(userFetching);
  const userFetched = useSelector(
    (state) => state.user.fetchStates === fetchStates.fetched
  );
  const username = useSelector((state) => state.user.user.name);

  const history = useHistory();

  if (userFetched) {
    history.push("/");
    toast.success(`Hoşgeldin ${username}!`);
  }

  return (
    <div>
      <Header />
      <>
        <div className="pt-10 flex flex-col justify-around items-center h-24 bg-secondary">
          <h1 className="font-bold text-4xl leading-[3rem] text-quaternary">
            Log In
          </h1>
          <p>
            Don't have an account ?{" "}
            <Link to="/signup" className="primary">
              Sign Up
            </Link>
          </p>
        </div>
        <form
          className="bg-secondary flex flex-col items-center justify-between p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="login-div">
            <label className="login-label">
              Email :
              <input
                className="login-input"
                placeholder="E-mail adresinizi giriniz..."
                {...register("email", {
                  required: "Lütfen e-mail adresinizi giriniz.",
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
                id="password"
                placeholder="Şifrenizi giriniz..."
                {...register("password", {
                  required: "Lütfen şifrenizi giriniz.",
                })}
              />
              {errors?.password && (
                <span className="login-span">* {errors.password.message}</span>
              )}
            </label>
          </div>
          <button
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            disabled={userFetching}
          >
            {userFetching ? <Spinner /> : "Submit"}
          </button>
        </form>
      </>
      <ProductListFooter />
    </div>
  );
};

export default LoginPage;
