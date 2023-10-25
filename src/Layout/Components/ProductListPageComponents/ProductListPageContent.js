import React from "react";
import BrandsCompound from "../../Compounds/GlobalCompounds/BrandsCompound";
import CategoryItems from "./PageContentComponents/CategoryItems";
import ProductOptions from "./PageContentComponents/ProductOptions";
import ProductsSection from "./PageContentComponents/ProductsSection";

const ProductListPageContent = () => {
  return (
    <div>
      <CategoryItems />
      <ProductOptions />
      <ProductsSection />
      <BrandsCompound />
    </div>
  );
};

export default ProductListPageContent;
