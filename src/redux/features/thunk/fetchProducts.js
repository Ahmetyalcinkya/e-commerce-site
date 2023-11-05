import { AxiosWithAuth } from "../../../utilities/axiosWithAuth";
import { setProducts } from "../product/productSlice";

export const fetchProducts = () => (dispatch) => {
  AxiosWithAuth()
    .get("products")
    .then((res) => {
      console.log(res);
      dispatch(setProducts(res.data));
    })
    .catch((err) => console.log(err));
};
