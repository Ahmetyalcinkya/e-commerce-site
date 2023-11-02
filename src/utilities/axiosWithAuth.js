import axios from "axios";

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
    headers: token ? { authorization: token } : {},
  });
};

export const renewAPI = (token) => {
  token && localStorage.setItem("token", token);

  AxiosWithAuth();
};

renewAPI(localStorage.getItem("token"));
