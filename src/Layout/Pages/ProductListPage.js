import React from "react";
import ProductListHeader from "../Components/ProductListPageComponents/ProductListHeader";
import ProductListPageContent from "../Components/ProductListPageComponents/ProductListPageContent";
import ProductListFooter from "../Components/ProductListPageComponents/ProductListFooter";

const ProductListPage = () => {
  return (
    <div>
      <ProductListHeader />
      <ProductListPageContent />
      <ProductListFooter />
    </div>
  );
};

export default ProductListPage;
