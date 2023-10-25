import React from "react";
import BrandsCompound from "../../Compounds/GlobalCompounds/BrandsCompound";
import ProductInformation from "./PageContentComponents/ProductInformation";
import ProductAbout from "./PageContentComponents/ProductAbout";
import OtherProducts from "./PageContentComponents/OtherProducts";

const ProductsPagePageContent = ({ Myproducts }) => {
  return (
    <div className="flex flex-col">
      <ProductInformation Myproducts={Myproducts} />
      <ProductAbout Myproducts={Myproducts} />
      <OtherProducts />
      <BrandsCompound />
    </div>
  );
};

export default ProductsPagePageContent;
