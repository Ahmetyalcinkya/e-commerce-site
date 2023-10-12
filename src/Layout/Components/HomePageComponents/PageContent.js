import React from "react";
import SliderCompound from "../../Compounds/HomePageCompounds/SliderCompound";
import data from "../../../Data/data";
import ScrollContainer from "react-indiana-drag-scroll";
import Pic2 from "../../../Assets/h5-baner-3 1.png";
import Pic3 from "../../../Assets/media bg-cover.png";
import Pic4 from "../../../Assets/media bg-cover (1).png";
import Pic5 from "../../../Assets/card-cover-5.jpg";
import Pic6 from "../../../Assets/unsplash_X5BWooeO4Cw.png";
import Pic7 from "../../../Assets/printed-summer-dress (4) 1.png";
import Pic8 from "../../../Assets/card-cover-5 (1).jpg";
import Pic9 from "../../../Assets/unsplash_X5BWooeO4Cw (1).png";
import Pic10 from "../../../Assets/printed-summer-dress (4) 1 (1).png";
import Pic11 from "../../../Assets/product-cover-5.png";
import Pic12 from "../../../Assets/product-cover-5 (1).png";
import Pic13 from "../../../Assets/product-cover-5 (2).png";
import Pic14 from "../../../Assets/product-cover-5 (3).png";
import Pic15 from "../../../Assets/Vector.png";
import Pic16 from "../../../Assets/Vector (1).png";
import Pic17 from "../../../Assets/Vector (2).png";
import Pic18 from "../../../Assets/Vector (3).png";
import Pic19 from "../../../Assets/Vector (4).png";
import Pic20 from "../../../Assets/Vector (5).png";
import Pic21 from "../../../Assets/unsplash_hHdHCfAifHU.png";
import Pic22 from "../../../Assets/unsplash_tVEqStC2uz8.png";
import Pic23 from "../../../Assets/unsplash_dEGu-oCuB1Y.png";
import { Icon } from "../../../Icons/icons";
import SectionOnePictureCompound from "../../Compounds/HomePageCompounds/SectionOnePictureCompound";
import SectionTwoPictureCompound from "../../Compounds/HomePageCompounds/SectionTwoPictureCompound";
import SectionSixPictureCompound from "../../Compounds/HomePageCompounds/SectionSixPictureCompound";
import SectionEightProductCard from "../../Compounds/HomePageCompounds/SectionEightProductCard";

const PageContent = () => {
  return (
    <div>
      <ScrollContainer className="scroll-container flex overflow-x gap-x-6 scroll-smooth">
        {data.map((image, index) => (
          <SliderCompound key={index} image={image} />
        ))}
      </ScrollContainer>
      <section className="flex w-full h-[24.5rem] bg-[#FAFAFA] justify-center items-center">
        <div className="flex w-[67.75rem] h-[14.5rem] items-center justify-between">
          {/* Map - key= index */}
          <SectionOnePictureCompound image={Pic2} />
          <SectionOnePictureCompound image={Pic3} />
          <SectionOnePictureCompound image={Pic4} />
        </div>
      </section>
      <section className="w-full h-[56.25rem] mt-[6.25rem]">
        <div className="flex w-[67.375rem] m-auto justify-between">
          <img src={Pic5} alt="" />
          <div className="w-[41.125rem] h-[50rem]">
            <div>
              <div className="h-[3.125rem] w-full justify-between flex items-center mb-2">
                <h5 className="font-bold text-sm tracking-wide w-56">
                  BESTSELLER PRODUCTS
                </h5>
                <div className="flex w-[27rem] justify-between items-center">
                  <div className="flex w-[18.75rem] justify-around">
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Accesories</a>
                  </div>
                  <div className="flex">
                    <span className="icon-span">
                      <Icon name="prev" size={16} />
                    </span>
                    <span className="icon-span">
                      <Icon name="next" size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-2" />
            <div className="w-[41.125rem] h-[45.5rem] flex flex-col justify-center">
              <div className="flex w-full h-[20.25rem] items-center">
                <SectionTwoPictureCompound image={Pic2} />
                <SectionTwoPictureCompound image={Pic3} />
                <SectionTwoPictureCompound image={Pic4} />
              </div>
              <div className="flex w-full h-[20.25rem] items-center">
                <SectionTwoPictureCompound image={Pic2} />
                <SectionTwoPictureCompound image={Pic3} />
                <SectionTwoPictureCompound image={Pic4} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full ">
        <div className="flex justify-center items-center">
          <img className="w-[45rem] h-[49rem]" src={Pic6} alt="" />
          <div className="w-[25rem] h-[49rem] bg-[#FAFAFA] flex justify-center items-center">
            <div className="w-[21.75rem] h-[32.875rem] flex flex-col justify-between items-center">
              <h3 className="text-2xl font-bold">MOST POPULAR</h3>
              <p className="w-[17.5rem] h-16 leading-tight tracking-widest text-sm font-normal">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="w-[21.75rem] h-[18.75rem] flex justify-center items-center">
                <img src={Pic7} alt="" />
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
        <div className="flex w-full justify-center h-[6.938rem] my-5">
          <div className="flex w-[16.563rem] h-[6.938rem] justify-center items-center">
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
          <div className="flex w-[16.563rem] h-[6.938rem] justify-center items-center">
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
          <div className="flex w-[16.563rem] h-[6.938rem] justify-center items-center">
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
          <div className="flex w-[16.563rem] h-[6.938rem] justify-center items-center">
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
      <section className="w-full h-[55.938rem] flex">
        <div className="flex w-[67.375rem] m-auto justify-between">
          <div className="w-[41.125rem] h-[50rem]">
            <div>
              <div className="h-[3.125rem] w-full justify-between flex items-center mb-2">
                <h5 className="font-bold text-sm tracking-wide w-56">
                  BESTSELLER PRODUCTS
                </h5>
                <div className="flex w-[27rem] justify-between items-center">
                  <div className="flex w-[18.75rem] justify-around">
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Accesories</a>
                  </div>
                  <div className="flex">
                    <span className="icon-span">
                      <Icon name="prev" size={16} />
                    </span>
                    <span className="icon-span">
                      <Icon name="next" size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-2" />
            <div className="w-[41.125rem] h-[45.5rem] flex flex-col justify-center">
              <div className="flex w-full h-[20.25rem] items-center">
                <SectionTwoPictureCompound image={Pic2} />
                <SectionTwoPictureCompound image={Pic3} />
                <SectionTwoPictureCompound image={Pic4} />
              </div>
              <div className="flex w-full h-[20.25rem] items-center">
                <SectionTwoPictureCompound image={Pic2} />
                <SectionTwoPictureCompound image={Pic3} />
                <SectionTwoPictureCompound image={Pic4} />
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={Pic8} alt="" />
            <div className="absolute top-5 left-5 flex flex-col">
              <h6 className="font-bold text-sm leading-6 tracking-wider">
                FURNITURE
              </h6>
              <h6 className="font-bold text-sm leading-6 tracking-wider	text-[#737373] text-left">
                5 Items
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[55rem] flex justify-center py-24">
        <div className="w-[25rem]  bg-[#FAFAFA] flex justify-center items-center">
          <div className="w-[21.75rem] h-[32.875rem] flex flex-col justify-between items-center">
            <h3 className="text-2xl font-bold">MOST POPULAR</h3>
            <p className="w-[17.5rem] h-16 leading-tight tracking-widest text-sm font-normal">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="w-[21.75rem] h-[18.75rem] flex justify-center items-center">
              <img src={Pic10} alt="" />
            </div>
            <a href="#" className="font-bold leading-tight tracking-wider">
              English Department
            </a>
            <h6 className="font-bold text-sm leading-6 tracking-widest text-[#737373] flex">
              <span className="flex flex-col justify-center items-center mr-1">
                <Icon name="downArrow" size={12} />
                <Icon name="vector" size={16} />
              </span>
              15 Sales
            </h6>
            <h5 className="font-bold">
              $16.48
              <span className="ml-1 text-[#23856D] font-bold">$6.48</span>
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
      <section className="w-full h-[38.75rem] bg-[#FAFAFA] flex flex-col items-center">
        <div className="w-[70.25rem] h-full flex justify-center py-10">
          <div className="w-[65rem] flex flex-col">
            <h3 className="font-bold text-2xl leading-8 tracking-wider text-left pb-5">
              BESTSELLER PRODUCTS
            </h3>
            <hr className="mb-5" />
            <div className="w-[65rem] h-[27.5rem] flex justify-between items-center">
              <SectionSixPictureCompound image={Pic11} />
              <SectionSixPictureCompound image={Pic12} />
              <SectionSixPictureCompound image={Pic13} />
              <SectionSixPictureCompound image={Pic14} />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[10.938rem] bg-[#FAFAFA]">
        <div className="flex justify-between w-[65.625rem] m-auto items-center">
          <img src={Pic15} alt="" className="w-[6.375rem] h-[2.125rem]" />
          <img src={Pic16} alt="" className="w-[5.25rem] h-[3.75rem]" />
          <img src={Pic17} alt="" className="w-[6.375rem] h-[4.688rem]" />
          <img src={Pic18} alt="" className="w-[6.375rem] h-[2.625rem]" />
          <img src={Pic19} alt="" className="w-[6.5rem] h-[3.75rem]" />
          <img src={Pic20} alt="" className="w-[4.688rem] h-[4.375rem]" />
        </div>
      </section>
      <section className="w-full h-[62.125rem]">
        <div className="w-[65.625rem] h-full m-auto flex flex-col items-center justify-around">
          <div className="w-[43.25rem] h-[5.25rem] flex flex-col justify-around mx-auto">
            <h6 className="font-bold text-sm leading-6 text-[#23A6F0]">
              Practice Advice
            </h6>
            <h2 className="font-bold text-4xl leading-10 ">Featured Posts</h2>
          </div>
          <div className="w-[65.313rem] h-[37.5rem] flex justify-between">
            <SectionEightProductCard image={Pic21} />
            <SectionEightProductCard image={Pic22} />
            <SectionEightProductCard image={Pic23} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageContent;
