import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Pic1 from "../../../Assets/media bg-cover (2).png";
import ProductCardCompound from "../../Compounds/ProductListPageCompounds/ProductCardCompound";
import { Icon } from "../../../Icons/icons";
import ListCardCompound from "../../Compounds/ProductListPageCompounds/ListCardCompound";
import Pic2 from "../../../Assets/product-cover-5 (4).png";
import products from "../../../Data/products";
import BrandsCompound from "../../Compounds/GlobalCompounds/BrandsCompound";

const ProductListPageContent = () => {
  return (
    <div>
      <section className="flex flex-col bg-[#FAFAFA] w-full">
        <div className="h-24 row-centered">
          <div className="flex w-[65.625rem] h-[2.75rem] justify-between items-center">
            <h3 className="text-bold text-2xl text-quaternary">Shop</h3>
            <div className="flex items-center gap-x-4">
              <a href="#" className="text-quaternary">
                Home
              </a>
              <FontAwesomeIcon icon={faChevronRight} />
              <a href="#" className="text-[#BDBDBD]">
                Shop
              </a>
            </div>
          </div>
        </div>
        <div className="w-[68rem] h-72 flex mx-auto justify-center">
          <div className="flex gap-x-4">
            {new Array(5).fill(<ProductCardCompound image={Pic1} />)}
          </div>
        </div>
      </section>
      <div className="w-full h-24 row-centered">
        <div className="w-[65.625rem] h-full flex items-center justify-between">
          <h6 className="font-bold text-sm text-[#737373]">
            Showing all 12 results
          </h6>
          <div className="flex items-center gap-x-4">
            <h6 className="font-bold text-sm text-secondary">Views:</h6>
            <div className="flex gap-x-4">
              <button className="w-12 h-12 row-centered border">
                <Icon name="list1" />
              </button>
              <button className="w-12 h-12 row-centered border">
                <Icon name="list2" />
              </button>
            </div>
          </div>
          <div className="flex gap-x-4">
            <button className="w-[8.75rem] h-[3.125rem] text-secondary bg-[#DDDDDD] rounded">
              Popularity
            </button>
            <button className="w-24 h-[3.125rem] text-white bg-primary rounded">
              Filter
            </button>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center w-full h-[111.25rem] p-8">
        <div className="flex flex-col flex-wrap w-[70.25rem] h-[111.125rem] justify-around items-center">
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
      <BrandsCompound />
    </div>
  );
};

export default ProductListPageContent;
