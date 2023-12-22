import React from "react";
import { useSelector } from "react-redux";

const PaymentPagePageContent = () => {
  const billingAddress = useSelector(
    (state) => state.shopping.selected_billing_address
  );
  const userAddress = useSelector((state) => state.shopping.selected_address);
  console.log(userAddress);
  console.log(billingAddress);
  return <div>PaymentPagePageContent</div>;
};

export default PaymentPagePageContent;
