import React from "react";
import BrandsCompound from "../../Compounds/GlobalCompounds/BrandsCompound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ProductsPagePageContent = ({ Myproducts }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[37.5rem] bg-[#FAFAFA] flex justify-center items-center">
        <div className="w-[65.75rem] h-[34.5rem] flex justify-between">
          <div className="flex flex-col w-[32rem] h-[34.5rem]">
            <img src={Myproducts?.productImg} alt="" />
            <div className="flex m-6">
              <img src={Myproducts?.productImg2} alt="" />
              <img src={Myproducts?.productImg} alt="" />
            </div>
          </div>
          <div className="w-[32rem] h-[29.5rem] flex flex-col text-left">
            <h4>{Myproducts.productHeader}</h4>
            <div className="flex gap-x-2 items-center">
              <FontAwesomeIcon icon={faStar} color="#F3CD03" />
              <FontAwesomeIcon icon={faStar} color="#F3CD03" />
              <FontAwesomeIcon icon={faStar} color="#F3CD03" />
              <FontAwesomeIcon icon={faStar} color="#F3CD03" />
              <FontAwesomeIcon icon={faStar} color="#F3CD03" />
              <p>10 Reviews</p>
            </div>
            <h3>{Myproducts.productPrice}</h3>
            <div className="flex">
              <h6>Availability :</h6>
              <h6>{Myproducts.productSituation}</h6>
            </div>
            <p>{Myproducts.productDescription}</p>
            <hr />
            <div className="flex">Renk seçenekleri</div>
            <div className="flex">
              <button>Select Options</button>
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faCartShopping} />
              <FontAwesomeIcon icon={faEye} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[68rem]"></div>
      <BrandsCompound />
    </div>
  );
};

export default ProductsPagePageContent;
