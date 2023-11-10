import { AxiosWithAuth } from "../../../utilities/axiosWithAuth";
import {
  changeFetchState,
  fetchStates,
  setProducts,
} from "../product/productSlice";

export const fetchProducts = (params) => (dispatch, getState) => {
  dispatch(changeFetchState(fetchStates.fetching));
  AxiosWithAuth()
    .get("products", { params })
    .then((res) => {
      dispatch(setProducts(res.data));
      dispatch(changeFetchState(fetchStates.fetched));
    })
    .catch((err) => {
      console.log(err);
      dispatch(changeFetchState(fetchStates.fetch_failed));
    });
};
