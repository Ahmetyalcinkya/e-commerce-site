import { toast } from "react-toastify";
import { AxiosWithAuth } from "../../../utilities/axiosWithAuth";
import { setCategory } from "../global/globalSlice";

export const fetchCategory = () => (dispatch) => {
  AxiosWithAuth()
    .get("categories")
    .then((res) => {
      console.log(res);
      dispatch(setCategory(res.data));
    })
    .catch((err) => {
      console.log(err);
      toast.error("Product data yüklenirken hata oluştu.");
    });
};
