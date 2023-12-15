import { AxiosWithAuth } from "../../../utilities/axiosWithAuth";
import { fetchStates } from "../product/productSlice";
import {
  changeFetchState,
  setAddress,
} from "../shoppingCart/shoppingCartSlice";

export const setUserAddress = (userAddress) => (dispatch, getState) => {
  // if (getState().shopping.fetchStates === fetchStates.not_fetched) {
  // dispatch(changeFetchState(fetchStates.fetching));
  AxiosWithAuth()
    .post("user/address", userAddress)
    .then((res) => {
      dispatch(setAddress(res.data));
      // dispatch(changeFetchState(fetchStates.fetched));
    })
    .catch((err) => {
      // dispatch(changeFetchState(fetchStates.fetch_failed));
    });
  // }
};
