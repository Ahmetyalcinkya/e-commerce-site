import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductAbout = ({ Myproducts }) => {
  return (
    <div className="flex flex-col w-full h-[81.75rem] iphone:h-[35.75rem] justify-around items-center">
      <div className="w-full iphone:w-[65.75rem] h-[4.5rem] flex justify-evenly items-center">
        <a href="#">Description</a>
        <a href="#">Additional Information</a>
        <a href="#">
          Reviews <span>(0)</span>
        </a>
      </div>
      <hr />
      <div className="w-full flex-col h-[79.75rem] iphone:flex-row iphone:w-[65.75rem] iphone:h-[31.25rem] pt-6 pb-12 flex justify-between items-center">
        <img src={Myproducts.productImg[2]} alt="" className="w-80 h-96" />
        <div className="w-80 h-96 flex flex-col justify-around">
          <h3 className="font-bold text-2xl leading-8 text-left">
            the quick fox jumps over{" "}
          </h3>
          <p className="text-left font-normal text-sm leading-5">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. <br /> Met minim Mollie non desert
            Alamo est sit cliquey dolor do met sent. RELIT official consequent
            door ENIM RELIT Mollie. Excitation venial consequent sent nostrum
            met. <br /> Met minim Mollie non desert Alamo est sit cliquey dolor
            do met sent. RELIT official consequent door ENIM RELIT Mollie.
            Excitation venial consequent sent nostrum met.
          </p>
        </div>
        <div className="w-80 h-96 flex flex-col justify-around">
          <h3 className="font-bold text-2xl leading-8 text-left">
            the quick fox jumps over{" "}
          </h3>
          <div className="h-32 flex flex-col justify-around">
            <div className="right-dir">
              <FontAwesomeIcon icon={faChevronRight} />
              <h6 className="products-h6">
                the quick fox jumps over the lazy dog
              </h6>
            </div>
            <div className="right-dir">
              <FontAwesomeIcon icon={faChevronRight} />
              <h6 className="products-h6">
                the quick fox jumps over the lazy dog
              </h6>
            </div>
            <div className="right-dir">
              <FontAwesomeIcon icon={faChevronRight} />
              <h6 className="products-h6">
                the quick fox jumps over the lazy dog
              </h6>
            </div>
            <div className="right-dir">
              <FontAwesomeIcon icon={faChevronRight} />
              <h6 className="products-h6">
                the quick fox jumps over the lazy dog
              </h6>
            </div>
          </div>
          <div className="h-32 flex flex-col justify-around">
            <div className="right-dir">
              <FontAwesomeIcon icon={faChevronRight} />
              <h6 className="products-h6">
                the quick fox jumps over the lazy dog
              </h6>
            </div>
            <div className="right-dir">
              <FontAwesomeIcon icon={faChevronRight} />
              <h6 className="products-h6">
                the quick fox jumps over the lazy dog
              </h6>
            </div>
            <div className="right-dir">
              <FontAwesomeIcon icon={faChevronRight} />
              <h6 className="products-h6">
                the quick fox jumps over the lazy dog
              </h6>
            </div>
            <div className="right-dir">
              <FontAwesomeIcon icon={faChevronRight} />
              <h6 className="products-h6">
                the quick fox jumps over the lazy dog
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
