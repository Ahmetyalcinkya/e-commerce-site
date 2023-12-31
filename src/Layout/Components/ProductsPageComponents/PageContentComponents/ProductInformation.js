import React from "react";
import { ProductsCarousel } from "../../../Compounds/HomePageCompounds/ProductsSliderCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { setCart } from "../../../../redux/features/shoppingCart/shoppingCartSlice";
import { useDispatch } from "react-redux";

const ProductInformation = ({ Myproducts }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(setCart(Myproducts));
  };
  return (
    <div className="w-full h-[62rem] iphone:h-[37.5rem] bg-secondary flex-col row-centered">
      <div className="w-full h-full iphone:w-[65.75rem] iphone:h-[34.5rem] flex flex-col iphone:flex-row justify-between">
        <div className="flex flex-col w-full px-6 iphone:px-0 iphone:w-[32rem] gap-y-4 h-[34.5rem] justify-between">
          <ProductsCarousel Myproducts={Myproducts} />
          <div className="flex w-56 justify-between">
            {Myproducts?.images.map((image, index) => (
              <img src={image.url} key={index} className="w-20 h-20" />
            ))}
          </div>
        </div>
        <div className="w-full iphone:w-[32rem] h-[28rem] flex flex-col px-10 iphone:px-4 text-left justify-between">
          <h4 className="font-normal text-xl leading-8">{Myproducts?.name}</h4>
          <div className="right-dir cursor-pointer">
            <FontAwesomeIcon icon={faStar} color="#F3CD03" />
            <FontAwesomeIcon icon={faStar} color="#F3CD03" />
            <FontAwesomeIcon icon={faStar} color="#F3CD03" />
            <FontAwesomeIcon icon={faStar} color="#F3CD03" />
            <FontAwesomeIcon icon={faStar} color="#F3CD03" />
            <p className="font-bold text-sm">10 Reviews</p>
          </div>
          <h3 className="font-bold text-2xl leading-8 text-[#252B42] flex">
            {Myproducts?.price} <h3 className="pl-1">₺</h3>
          </h3>
          <h6 className="font-bold text-sm leading-7 flex w-40 justify-between">
            Availability :{" "}
            <h6 className="text-[#23A6F0]">
              {Myproducts?.stock > 0 ? "In Stock" : "Not In Stock"}
            </h6>
          </h6>
          <p className="text-sm leading-6 text-[#858585]">
            {Myproducts?.description}
          </p>
          <hr />
          <div className="flex">
            <button className="w-8 h-8 bg-[#23A6F0] rounded-full mr-2"></button>
            <button className="w-8 h-8 bg-[#23856D] rounded-full mr-2"></button>
            <button className="w-8 h-8 bg-[#E77C40] rounded-full mr-2"></button>
            <button className="w-8 h-8 bg-[#252B42] rounded-full mr-2"></button>
          </div>
          <div className="flex iphone:w-[18.75rem] h-11 justify-between items-center">
            <button
              onClick={addToCart}
              className="bg-primary py-2.5 px-5 rounded text-white"
            >
              Sepete Ekle
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
