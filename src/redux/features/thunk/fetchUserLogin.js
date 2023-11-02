import { toast } from "react-toastify";
import { AxiosWithAuth, renewAPI } from "../../../utilities/axiosWithAuth";
import { fetchStates } from "../product/productSlice";
import { changeFetchState, setUser } from "../user/userSlice";

export const fetchUserLogin = () => (dispatch) => {
  dispatch(changeFetchState(fetchStates.fetching));
  AxiosWithAuth()
    .get("verify")
    .then((res) => {
      console.log(res);
      dispatch(changeFetchState(fetchStates.fetched));
      dispatch(setUser(res.data));
      renewAPI(res.token);
    })
    .catch((err) => {
      toast.error("Verify çalışmadı" + err.message);
      dispatch(changeFetchState(fetchStates.fetch_failed));
      localStorage.removeItem("token");
      renewAPI();
    });
};
