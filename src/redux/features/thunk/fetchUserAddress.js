import { AxiosWithAuth } from "../../../utilities/axiosWithAuth";
import { getUserAddress } from "../shoppingCart/shoppingCartSlice";

export const fetchUserAddress = () => (dispatch) => {
  AxiosWithAuth()
    .get("user/address")
    .then((res) => {
      //   dispatch(getUserAddress(res.data));
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
