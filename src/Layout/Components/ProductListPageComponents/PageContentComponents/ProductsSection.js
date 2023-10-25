import React from "react";
import ListCardCompound from "../../../Compounds/ProductListPageCompounds/ListCardCompound";
import Pic2 from "../../../../Assets/product-cover-5 (4).png";
import products from "../../../../Data/products";

const ProductsSection = () => {
  return (
    <section className="flex flex-col items-center w-full h-[370rem] iphone:h-[111.25rem] p-8">
      <div className="flex flex-col flex-wrap iphone:w-[70.25rem] iphone:h-[111.125rem] justify-around items-center">
        {new Array(3).fill(
          products.map((product) => (
            <ListCardCompound product={product} image={Pic2} />
          ))
        )}
      </div>
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
