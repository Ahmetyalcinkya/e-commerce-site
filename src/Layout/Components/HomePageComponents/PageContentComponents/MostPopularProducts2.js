import React from "react";
import Pic9 from "../../../../Assets/unsplash_X5BWooeO4Cw (1).png";
import Pic10 from "../../../../Assets/printed-summer-dress (4) 1 (1).png";
import { Icon } from "../../../../Icons/icons";

const MostPopularProducts2 = () => {
  return (
    <section className="w-full flex-col-reverse h-[116.5rem] iphone:h-[55rem] flex iphone:flex-row justify-center py-24">
      <div className=" w-full mt-6 iphone:mt-0 iphone:w-[25rem] bg-secondary row-centered ">
        <div className="w-[21.75rem] py-6 iphone:py-0 h-[40rem] iphone:h-[32.875rem] flex flex-col justify-between items-center">
          <h3 className="text-2xl font-bold">MOST POPULAR</h3>
          <p className="w-[17.5rem] h-16 leading-tight tracking-widest text-sm font-normal">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="w-[21.75rem] h-[18.75rem] row-centered">
            <img src={Pic10} alt="" />
          </div>
          <a href="#" className="font-bold leading-tight tracking-wider">
            English Department
          </a>
          <h6 className="font-bold text-sm leading-6 tracking-widest text-secondary flex">
            <span className="column-centered mr-1">
              <Icon name="downArrow" size={12} />
              <Icon name="vector" size={16} />
            </span>
            15 Sales
          </h6>
          <h5 className="font-bold">
            $16.48
            <span className="ml-1 text-tertiary font-bold">$6.48</span>
          </h5>
          <div className="flex">
            <button className="w-4 h-4 bg-[#23A6F0] rounded-full mr-2"></button>
            <button className="w-4 h-4 bg-[#23856D] rounded-full mr-2"></button>
            <button className="w-4 h-4 bg-[#E77C40] rounded-full mr-2"></button>
            <button className="w-4 h-4 bg-[#252B42] rounded-full mr-2"></button>
          </div>
        </div>
      </div>
      <img src={Pic9} alt="" />
    </section>
  );
};

export default MostPopularProducts2;
