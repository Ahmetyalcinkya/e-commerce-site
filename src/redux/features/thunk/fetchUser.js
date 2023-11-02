import { AxiosWithAuth } from "../../../utilities/axiosWithAuth";
import { fetchStates } from "../product/productSlice";
import { changeFetchState, setUser } from "../user/userSlice";

export const fetchUser = (userData) => (dispatch, getState) => {
  if (getState().user.fetchStates === fetchStates.not_fetched) {
    dispatch(changeFetchState(fetchStates.fetching));
    AxiosWithAuth()
      .post("login", userData)
      .then((res) => {
        dispatch(setUser(res.data));
        localStorage.setItem("token", res.data.token);
        dispatch(changeFetchState(fetchStates.fetched));
      })
      .catch((err) => {
        dispatch(changeFetchState(fetchStates.fetch_failed));
      });
  }
};
