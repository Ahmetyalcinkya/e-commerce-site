import React from "react";
import { Icon } from "../../../Icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../HomePageComponents/Header";

const ProductListHeader = () => {
  return (
    <div>
      <div className="w-full h-[3.625rem] bg-quaternary row-centered">
        <div className="w-[70.5rem] h-[2.875rem] row-centered">
          <div className="flex">
            <div className="flex w-[7.5rem] h-9 justify-between items-center">
              <Icon name="phone" size={16} />
              <h6 className="text-white text-xs">(225) 555-0118</h6>
            </div>
            <div className="flex w-[14.25rem] h-9 p-2.5 gap-x-1.5 items-center">
              <Icon name="mail" size={16} />
              <h6 className="text-white text-xs">
                michelle.rivera@example.com
              </h6>
            </div>
          </div>
          <div className="w-[21.25rem] h-[2.75rem] row-centered">
            <h6 className="font-bold text-sm text-white">
              Follow Us and get a chance to win 80% off
            </h6>
          </div>
          <div className="w-[14.75rem] flex h-11 items-center justify-around">
            <h6 className="font-bold text-sm text-white">Follow Us :</h6>
            <div className="flex w-[7.5rem] h-7 justify-between">
              <span className="product-banner-icon">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </span>
              <span className="product-banner-icon">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </span>
              <span className="product-banner-icon">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </span>
              <span className="product-banner-icon">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default ProductListHeader;
