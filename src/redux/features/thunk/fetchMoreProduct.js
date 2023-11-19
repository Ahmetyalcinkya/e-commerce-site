import { AxiosWithAuth } from "../../../utilities/axiosWithAuth";
import {
  addProducts,
  changeFetchState,
  fetchStates,
  setTotalProductCount,
} from "../product/productSlice";

export const fetchMoreProducts = (params) => (dispatch) => {
  dispatch(changeFetchState(fetchStates.fetching));
  AxiosWithAuth()
    .get("products", { params })
    .then((res) => {
      dispatch(addProducts(res.data.products));
      dispatch(setTotalProductCount(res.data.total));
      dispatch(changeFetchState(fetchStates.fetched));
    })
    .catch((err) => {
      dispatch(changeFetchState(fetchStates.fetch_failed));
      console.log(err);
    });
};
