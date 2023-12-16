import React, { useEffect } from "react";
import PaymentPageHeader from "../Components/PaymentPage Components/PaymentPageHeader";
import PaymentPageFooter from "../Components/PaymentPage Components/PaymentPageFooter";
import PaymentPagePageContent from "../Components/PaymentPage Components/PaymentPagePageContent";

const PaymentPage = () => {
  useEffect(() => {
    // payment info will be get from backend
  }, []);

  return (
    <div>
      <PaymentPageHeader />
      <PaymentPagePageContent />
      <PaymentPageFooter />
    </div>
  );
};

export default PaymentPage;
