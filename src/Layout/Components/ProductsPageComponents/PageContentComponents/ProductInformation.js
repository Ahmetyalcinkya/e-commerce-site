import React from "react";
import { ProductsCarousel } from "../../../Compounds/HomePageCompounds/ProductsSliderCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ProductInformation = ({ Myproducts }) => {
  return (
    <div className="w-full h-[62rem] iphone:h-[37.5rem] bg-secondary flex-col row-centered">
      <div className="w-full h-full iphone:w-[65.75rem] iphone:h-[34.5rem] flex flex-col iphone:flex-row justify-between">
        <div className="flex flex-col w-full px-6 iphone:px-0 iphone:w-[32rem] gap-y-4 h-[34.5rem] justify-between">
          <ProductsCarousel Myproducts={Myproducts} />
          <div className="flex w-56 justify-between">
            <img src={Myproducts?.productImg[1]} alt="" className="w-24 h-20" />
            <img src={Myproducts?.productImg[2]} alt="" className="w-24 h-20" />
          </div>
        </div>
        <div className="w-full iphone:w-[32rem] h-[29.5rem] flex flex-col px-10 iphone:px-0 text-left justify-around">
          <h4 className="font-normal text-xl leading-8">
            {Myproducts.productHeader}
          </h4>
          <div className="right-dir">
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
            <h6 className="text-primary font-bold text-sm leading-7">
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
            <button className="bg-primary py-2.5 px-5 rounded text-white">
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
  );
};

export default ProductInformation;
