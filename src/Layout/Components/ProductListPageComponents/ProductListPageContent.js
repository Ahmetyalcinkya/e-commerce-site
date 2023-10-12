import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Pic1 from "../../../Assets/media bg-cover (2).png";
import ProductCardCompound from "../../Compounds/ProductListPageCompounds/ProductCardCompound";
import { Icon } from "../../../Icons/icons";
import ListCardCompound from "../../Compounds/ProductListPageCompounds/ListCardCompound";
import Pic2 from "../../../Assets/product-cover-5 (4).png";
import Pic3 from "../../../Assets/Vector.png";
import Pic4 from "../../../Assets/Vector (1).png";
import Pic5 from "../../../Assets/Vector (2).png";
import Pic6 from "../../../Assets/Vector (3).png";
import Pic7 from "../../../Assets/Vector (4).png";
import Pic8 from "../../../Assets/Vector (5).png";

const ProductListPageContent = () => {
  return (
    <div>
      <section className="flex flex-col bg-[#FAFAFA] w-full">
        <div className="flex h-24 justify-center items-center">
          <div className="flex w-[65.625rem] h-[2.75rem] justify-between items-center">
            <h3 className="text-bold text-2xl text-[#252B42]">Shop</h3>
            <div className="flex items-center gap-x-4">
              <a href="#" className="text-[#252B42]">
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
            <ProductCardCompound image={Pic1} />
            <ProductCardCompound image={Pic1} />
            <ProductCardCompound image={Pic1} />
            <ProductCardCompound image={Pic1} />
            <ProductCardCompound image={Pic1} />
          </div>
        </div>
      </section>
      <div className="flex w-full h-24 justify-center items-center">
        <div className="w-[65.625rem] h-full flex items-center justify-between">
          <h6 className="font-bold text-sm text-[#737373]">
            Showing all 12 results
          </h6>
          <div className="flex items-center gap-x-4">
            <h6 className="font-bold text-sm text-[#737373]">Views:</h6>
            <div className="flex gap-x-4">
              <button className="w-12 h-12 flex justify-center items-center border">
                <Icon name="list1" />
              </button>
              <button className="w-12 h-12 flex justify-center items-center border">
                <Icon name="list2" />
              </button>
            </div>
          </div>
          <div className="flex gap-x-4">
            <button className="w-[8.75rem] h-[3.125rem] text-[#737373] bg-[#DDDDDD] rounded">
              Popularity
            </button>
            <button className="w-24 h-[3.125rem] text-white bg-[#23A6F0] rounded">
              Filter
            </button>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center w-full h-[111.25rem] p-8">
        <div className="flex flex-col w-[70.25rem] h-[111.125rem] justify-around items-center">
          <div className="flex gap-x-8">
            <ListCardCompound image={Pic2} />
            <ListCardCompound image={Pic2} />
            <ListCardCompound image={Pic2} />
            <ListCardCompound image={Pic2} />
          </div>
          <div className="flex gap-x-8">
            <ListCardCompound image={Pic2} />
            <ListCardCompound image={Pic2} />
            <ListCardCompound image={Pic2} />
            <ListCardCompound image={Pic2} />
          </div>
          <div className="flex gap-x-8">
            <ListCardCompound image={Pic2} />
            <ListCardCompound image={Pic2} />
            <ListCardCompound image={Pic2} />
            <ListCardCompound image={Pic2} />
          </div>
        </div>
        <nav className="flex">
          <ul className="flex w-[19.75rem] h-20 items-center text-[#23A6F0]">
            <button className="w-20 h-20 border rounded-l-lg">
              <a href="#">Previous</a>
            </button>
            <a
              href="#"
              className="w-14 h-full hover:bg-[#23A6F0] flex justify-center items-center border hover:text-white cursor-pointer"
            >
              1
            </a>
            <a
              href="#"
              className="w-14 h-full hover:bg-[#23A6F0] flex justify-center items-center border hover:text-white cursor-pointer"
            >
              2
            </a>
            <a
              href="#"
              className="w-14 h-full hover:bg-[#23A6F0] flex justify-center items-center border hover:text-white cursor-pointer"
            >
              3
            </a>
            <button className="w-20 h-20 border rounded-r-lg">
              <a href="#">Next</a>
            </button>
          </ul>
        </nav>
      </section>
      <section className="w-full h-[10.938rem] bg-[#FAFAFA] flex items-center justify-center">
        <div className="flex justify-between w-[65.625rem] m-auto items-center">
          <img src={Pic3} alt="" className="w-[6.375rem] h-[2.125rem]" />
          <img src={Pic4} alt="" className="w-[5.25rem] h-[3.75rem]" />
          <img src={Pic5} alt="" className="w-[6.375rem] h-[4.688rem]" />
          <img src={Pic6} alt="" className="w-[6.375rem] h-[2.625rem]" />
          <img src={Pic7} alt="" className="w-[6.5rem] h-[3.75rem]" />
          <img src={Pic8} alt="" className="w-[4.688rem] h-[4.375rem]" />
        </div>
      </section>
    </div>
  );
};

export default ProductListPageContent;
