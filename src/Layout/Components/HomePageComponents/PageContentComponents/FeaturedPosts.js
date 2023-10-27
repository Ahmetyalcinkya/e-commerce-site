import React from "react";
import Pic15 from "../../../../Assets/unsplash_hHdHCfAifHU.png";
import Pic16 from "../../../../Assets/unsplash_tVEqStC2uz8.png";
import Pic17 from "../../../../Assets/unsplash_dEGu-oCuB1Y.png";
import SectionEightProductCard from "../../../Compounds/HomePageCompounds/SectionEightProductCard";

const FeaturedPosts = () => {
  return (
    <section className="w-full h-[141rem] iphone:h-[62.125rem] py-10 px-10 iphone:px-0 iphone:py-0">
      <div className="w-full iphone:w-[65.625rem] h-full m-auto flex flex-col items-center iphone:justify-around">
        <div className="w-full iphone:w-[43.25rem] h-[5.25rem] flex flex-col justify-around mx-auto">
          <h6 className="font-bold text-sm leading-6 primary">
            Practice Advice
          </h6>
          <h2 className="font-bold text-4xl leading-10">Featured Posts</h2>
        </div>
        <div className="w-full flex-col iphone:flex-row iphone:w-[65.313rem] h-[37.5rem] flex justify-between gap-y-8 iphone:gap-y-0">
          <SectionEightProductCard image={Pic15} />
          <SectionEightProductCard image={Pic16} />
          <SectionEightProductCard image={Pic17} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
