import React from "react";
import BrandsCompound from "../../Compounds/GlobalCompounds/BrandsCompound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronRight,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import products from "../../../Data/products";
import ListCardCompound from "../../Compounds/ProductListPageCompounds/ListCardCompound";
import Pic2 from "../../../Assets/product-cover-5 (4).png";
import ProductListCardCompound from "../../Compounds/ProductPageCompounds/ListCardCompound copy";

const ProductsPagePageContent = ({ Myproducts }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[37.5rem] bg-[#FAFAFA] flex justify-center items-center">
        <div className="w-[65.75rem] h-[34.5rem] flex justify-between">
          <div className="flex flex-col w-[32rem] h-[34.5rem] justify-between">
            <img
              src={Myproducts?.productImg}
              alt=""
              className="w-full h-[28rem]"
            />
            <div className="flex w-56 justify-between">
              <img src={Myproducts?.productImg2} alt="" className="w-24 h-20" />
              <img src={Myproducts?.productImg} alt="" className="w-24 h-20" />
            </div>
          </div>
          <div className="w-[32rem] h-[29.5rem] flex flex-col text-left justify-around">
            <h4 className="font-normal text-xl leading-8">
              {Myproducts.productHeader}
            </h4>
            <div className="flex gap-x-2 items-center">
              <FontAwesomeIcon icon={faStar} color="#F3CD03" />
              <FontAwesomeIcon icon={faStar} color="#F3CD03" />
              <FontAwesomeIcon icon={faStar} color="#F3CD03" />
              <FontAwesomeIcon icon={faStar} color="#F3CD03" />
              <FontAwesomeIcon icon={faStar} color="#F3CD03" />
              <p className="font-bold text-sm">10 Reviews</p>
            </div>
            <h3 className="font-bold text-2xl leading-8 text-[#252B42]">
              {Myproducts.productPrice}
            </h3>
            <div className="flex">
              <h6 className="font-bold text-sm leading-7 mr-2">
                Availability :{" "}
              </h6>
              <h6 className="text-[#23A6F0] font-bold text-sm leading-7">
                {Myproducts.productSituation}
              </h6>
            </div>
            <p className="text-sm leading-6 text-[#858585]">
              {Myproducts.productDescription}
            </p>
            <hr />
            <div className="flex">
              <button className="w-8 h-8 bg-[#23A6F0] rounded-full mr-2"></button>
              <button className="w-8 h-8 bg-[#23856D] rounded-full mr-2"></button>
              <button className="w-8 h-8 bg-[#E77C40] rounded-full mr-2"></button>
              <button className="w-8 h-8 bg-[#252B42] rounded-full mr-2"></button>
            </div>
            <div className="flex w-[18.75rem] h-11 justify-between items-center">
              <button className="bg-[#23A6F0] py-2.5 px-5 rounded text-white">
                Select Options
              </button>
              <button className="product-setting-btn">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="product-setting-btn">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <button className="product-setting-btn">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-[35.75rem] justify-around items-center">
        <div className="w-[65.75rem] h-[4.5rem] flex justify-evenly items-center">
          <a href="#">Description</a>
          <a href="#">Additional Information</a>
          <a href="#">
            Reviews <span>(0)</span>
          </a>
        </div>
        <hr />
        <div className="w-[65.75rem] h-[31.25rem] pt-6 pb-12 flex justify-between items-center">
          <img src={Myproducts.productImg3} alt="" className="w-80 h-96" />
          <div className="w-80 h-96 flex flex-col justify-around">
            <h3 className="font-bold text-2xl leading-8 text-left">
              the quick fox jumps over{" "}
            </h3>
            <p className="text-left font-normal text-sm leading-5">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met. <br /> Met minim Mollie non
              desert Alamo est sit cliquey dolor do met sent. RELIT official
              consequent door ENIM RELIT Mollie. Excitation venial consequent
              sent nostrum met. <br /> Met minim Mollie non desert Alamo est sit
              cliquey dolor do met sent. RELIT official consequent door ENIM
              RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
          <div className="w-80 h-96 flex flex-col justify-around">
            <h3 className="font-bold text-2xl leading-8 text-left">
              the quick fox jumps over{" "}
            </h3>
            <div className="h-32 flex flex-col justify-around">
              <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faChevronRight} />
                <h6 className="text-sm font-bold leading-6">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faChevronRight} />
                <h6 className="text-sm font-bold leading-6">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faChevronRight} />
                <h6 className="text-sm font-bold leading-6">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faChevronRight} />
                <h6 className="text-sm font-bold leading-6">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
            </div>
            <div className="h-32 flex flex-col justify-around">
              <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faChevronRight} />
                <h6 className="text-sm font-bold leading-6">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faChevronRight} />
                <h6 className="text-sm font-bold leading-6">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faChevronRight} />
                <h6 className="text-sm font-bold leading-6">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faChevronRight} />
                <h6 className="text-sm font-bold leading-6">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[68rem] bg-[#FAFAFA] flex justify-center items-center">
        <div className="w-[65.625rem] flex flex-col justify-center text-left">
          <h3 className="font-bold text-2xl">BESTSELLER PRODUCTS</h3>
          <hr className="m-2 w-full" />
          <div className="flex  flex-wrap w-full justify-around items-center">
            {new Array(2).fill(
              products.map((product) => (
                <ProductListCardCompound product={product} image={Pic2} />
              ))
            )}
          </div>
        </div>
      </div>
      <BrandsCompound />
    </div>
  );
};

export default ProductsPagePageContent;
