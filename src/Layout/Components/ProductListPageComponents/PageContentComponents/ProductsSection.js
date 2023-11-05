import React from "react";
import ListCardCompound from "../../../Compounds/ProductListPageCompounds/ListCardCompound";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductsSection = () => {
  const productList = useSelector((state) => state.product.productList);
  const categories = useSelector((state) => state.global.categories);

  const { category } = useParams();

  const categoryID = categories.find((c) => c.code === category)?.id;

  const categorilize = productList?.products?.filter(
    (p) => p.category_id === categoryID
  );

  console.log(categorilize);

  return (
    <section className="flex flex-col items-center w-full h-[370rem] iphone:h-[220.25rem] p-8">
      {/* product düzenlendiğinde h-[110.25rem] */}
      {categoryID ? (
        <div className="flex flex-wrap iphone:w-[70.25rem] justify-around items-center">
          {categorilize?.map((product, index) => (
            <ListCardCompound key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap iphone:w-[70.25rem] justify-around items-center">
          {productList?.products?.map((product) => (
            <ListCardCompound product={product} />
          ))}
        </div>
      )}
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
