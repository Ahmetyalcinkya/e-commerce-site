import React from "react";
import Pic1 from "../../../../Assets/unsplash_X5BWooeO4Cw.png";
import Pic2 from "../../../../Assets/printed-summer-dress (4) 1.png";
import { Icon } from "../../../../Icons/icons";

const MostPopularProducts1 = () => {
  return (
    <section className="w-full h-[116.5rem] iphone:h-[55.5rem]">
      <div className="flex-col row-centered">
        <img
          className="w-full iphone:w-[45rem] iphone:h-[49rem]"
          src={Pic1}
          alt=""
        />
        <div className="w-[25rem] h-[49rem] bg-[#FAFAFA] row-centered">
          <div className="w-[21.75rem] h-[32.875rem] flex flex-col justify-between items-center">
            <h3 className="text-2xl font-bold">MOST POPULAR</h3>
            <p className="w-[17.5rem] h-16 leading-tight tracking-widest text-sm font-normal">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="w-[21.75rem] h-[18.75rem] row-centered">
              <img src={Pic2} alt="" />
            </div>
            <a href="#" className="font-bold leading-tight tracking-wider">
              English Department
            </a>
            <h5 className="font-bold">
              $16.48
              <span className="ml-1 text-[#23856D] font-bold">$6.48</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col iphone:flex-row items-center justify-center iphone:h-[6.938rem] my-5">
        <div className="row-centered w-[16.563rem] h-[6.938rem]">
          <div className="flex items-center w-[12.5rem] h-16">
            <div>
              <Icon name="one" size={25} />
            </div>
            <div className="flex flex-col text-left pl-2">
              <h6 className="font-bold text-sm tracking-wide leading-6">
                Easy to use
              </h6>
              <p className="font-normal text-xs leading-4 tracking-widest">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
        </div>
        <div className="row-centered w-[16.563rem] h-[6.938rem]">
          <div className="flex items-center w-[12.5rem] h-16">
            <div>
              <Icon name="two" size={25} />
            </div>
            <div className="flex flex-col text-left pl-2">
              <h6 className="font-bold text-sm tracking-wide leading-6">
                Easy to use
              </h6>
              <p className="font-normal text-xs leading-4 tracking-widest">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
        </div>
        <div className="row-centered w-[16.563rem] h-[6.938rem]">
          <div className="flex items-center w-[12.5rem] h-16">
            <div>
              <Icon name="three" size={25} />
            </div>
            <div className="flex flex-col text-left pl-2">
              <h6 className="font-bold text-sm tracking-wide leading-6">
                Easy to use
              </h6>
              <p className="font-normal text-xs leading-4 tracking-widest">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
        </div>
        <div className="row-centered w-[16.563rem] h-[6.938rem]">
          <div className="flex items-center w-[12.5rem] h-16">
            <div>
              <Icon name="four" size={25} />
            </div>
            <div className="flex flex-col text-left pl-2">
              <h6 className="font-bold text-sm tracking-wide leading-6">
                Easy to use
              </h6>
              <p className="font-normal text-xs leading-4 tracking-widest">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPopularProducts1;
