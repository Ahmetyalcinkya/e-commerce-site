import { AxiosWithAuth } from "../../../utilities/axiosWithAuth";
import { setProducts } from "../product/productSlice";

export const fetchProducts = (params) => (dispatch) => {
  AxiosWithAuth()
    .get("products", { params })
    .then((res) => {
      dispatch(setProducts(res.data));
    })
    .catch((err) => console.log(err));
};
