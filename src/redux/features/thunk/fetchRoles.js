import { AxiosWithAuth } from "../../../utilities/axiosWithAuth";
import { setRoles } from "../global/globalSlice";

export const fetchRoles = () => (dispatch) => {
  AxiosWithAuth()
    .get("roles")
    .then((res) => {
      dispatch(setRoles(res.data.reverse()));
    })
    .catch((err) => console.log(err));
};
