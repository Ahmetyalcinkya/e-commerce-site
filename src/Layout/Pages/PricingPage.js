import React from "react";
import PricingPageHeader from "../Components/PricingPageComponents/PricingPageHeader";
import PricingPagePageContent from "../Components/PricingPageComponents/PricingPagePageContent";
import PricingPageFooter from "../Components/PricingPageComponents/PricingPageFooter";

const PricingPage = () => {
  return (
    <div>
      <PricingPageHeader />
      <PricingPagePageContent />
      <PricingPageFooter />
    </div>
  );
};

export default PricingPage;
