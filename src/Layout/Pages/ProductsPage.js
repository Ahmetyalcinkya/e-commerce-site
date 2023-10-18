import React from "react";
import products from "../../Data/products";
import { useParams } from "react-router-dom";
import ProductsPageHeader from "../Components/ProductsPageComponents/ProductsPageHeader";
import ProductsPagePageContent from "../Components/ProductsPageComponents/ProductsPagePageContent";
import ProductsPageFooter from "../Components/ProductsPageComponents/ProductsPageFooter";

const ProductsPage = () => {
  const { id } = useParams();
  const Myproducts = products.find(
    (product) => product.productId === Number(id)
  );
  return (
    <div>
      <ProductsPageHeader />
      <ProductsPagePageContent Myproducts={Myproducts} />
      <ProductsPageFooter />
    </div>
  );
};

export default ProductsPage;
