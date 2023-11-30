import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosWithAuth } from "../../utilities/axiosWithAuth";
import ProductsPageFooter from "../Components/ProductsPageComponents/ProductsPageFooter";
import ProductsPageHeader from "../Components/ProductsPageComponents/ProductsPageHeader";
import ProductsPagePageContent from "../Components/ProductsPageComponents/ProductsPagePageContent";

const ProductsPage = () => {
  const { productId } = useParams();

  const [Myproducts, setMyproducts] = useState();

  useEffect(() => {
    AxiosWithAuth()
      .get(`products/${productId}`)
      .then((res) => setMyproducts(res.data));
  }, [productId]);

  return (
    <div>
      <ProductsPageHeader />
      <ProductsPagePageContent Myproducts={Myproducts} />
      <ProductsPageFooter />
    </div>
  );
};

export default ProductsPage;
