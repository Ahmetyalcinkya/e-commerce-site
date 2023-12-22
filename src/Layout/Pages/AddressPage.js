import React, { useEffect } from "react";
import AddressPageHeader from "../Components/AddressPage Components/AddressPageHeader";
import AddressPagePageContent from "../Components/AddressPage Components/AddressPagePageContent";
import AddressPageFooter from "../Components/AddressPage Components/AddressPageFooter";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAddress } from "../../redux/features/thunk/fetchUserAddress";

const AddressPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserAddress());
  }, []);
  return (
    <div>
      <AddressPageHeader />
      <AddressPagePageContent />
      <AddressPageFooter />
    </div>
  );
};

export default AddressPage;
