import React, { useState } from "react";
import BrandsCompound from "../../Compounds/GlobalCompounds/BrandsCompound";
import CategoryItems from "./PageContentComponents/CategoryItems";
import ProductOptions from "./PageContentComponents/ProductOptions";
import ProductsSection from "./PageContentComponents/ProductsSection";

const ProductListPageContent = () => {
  const [view, setView] = useState(true);

  return (
    <div>
      <CategoryItems />
      <ProductOptions setView={setView} />
      <ProductsSection view={view} />
      <BrandsCompound />
    </div>
  );
};

export default ProductListPageContent;
