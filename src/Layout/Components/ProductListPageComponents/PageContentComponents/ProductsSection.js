import { Spinner } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { fetchStates } from "../../../../redux/features/product/productSlice";
import ListCardCompound from "../../../Compounds/ProductListPageCompounds/ListCardCompound";

const ProductsSection = () => {
  const { products } = useSelector((state) => state.product.productList);
  const productFetched = useSelector(
    (state) => state.product.fetchStates === fetchStates.fetched
  );
  const productNotFetched = useSelector(
    (state) => state.product.fetchStates !== fetchStates.fetched
  );

  return (
    <section className="flex flex-col items-center w-full h-[370rem] iphone:h-[220.25rem] p-8">
      {/* product düzenlendiğinde h-[110.25rem] */}
      {productFetched && (
        <div className="flex flex-wrap iphone:w-[70.25rem] justify-around items-center">
          {products?.map((product, index) => (
            <ListCardCompound key={index} product={product} />
          ))}
        </div>
      )}
      {productNotFetched && <Spinner />}
      <nav className="flex">
        <ul className="flex w-[19.75rem] h-20 items-center primary">
          <button className="w-20 h-20 border rounded-l-lg">
            <a href="#">Previous</a>
          </button>
          <a
            href="#"
            className="w-14 h-full hover:bg-primary row-centered border hover:text-white cursor-pointer"
          >
            1
          </a>
          <a
            href="#"
            className="w-14 h-full hover:bg-primary row-centered border hover:text-white cursor-pointer"
          >
            2
          </a>
          <a
            href="#"
            className="w-14 h-full hover:bg-primary row-centered border hover:text-white cursor-pointer"
          >
            3
          </a>
          <button className="w-20 h-20 border rounded-r-lg">
            <a href="#">Next</a>
          </button>
        </ul>
      </nav>
    </section>
  );
};

export default ProductsSection;
