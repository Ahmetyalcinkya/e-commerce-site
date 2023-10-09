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
import { Icon } from "../../../Icons/icons";

const PageContent = () => {
  return (
    <div>
      <ScrollContainer className="scroll-container">
        <div className="flex overflow-x gap-x-6 scroll-smooth">
          {data.map((image, index) => (
            <SliderCompound key={index} image={image} />
          ))}
        </div>
      </ScrollContainer>
      <section className="flex w-full h-[24.5rem] bg-[#FAFAFA] justify-center items-center">
        <div className="flex w-[67.75rem] h-[14.5rem] items-center justify-between">
          <div className="custom-div">
            <img src={Pic2} alt="" />
            <div className="absolute top-8 left-4 flex flex-col items-start">
              <p className="text-sm mb-4">Your Space</p>
              <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                Unique Life
              </h6>
              <p className="text-sm mb-4">Explore Items</p>
            </div>
          </div>
          <div className="custom-div">
            <img src={Pic3} alt="" className="" />
            <div className="absolute top-8 left-4 flex flex-col items-start">
              <p className="text-sm mb-4">Ends Today</p>
              <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                Elements Style
              </h6>
              <p className="text-sm mb-4">Explore Items</p>
            </div>
          </div>
          <div className="custom-div">
            <img src={Pic4} alt="" className="" />
            <div className="absolute top-8 left-4 flex flex-col items-start">
              <p className="text-sm mb-4">Ends Today</p>
              <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                Elements Style
              </h6>
              <p className="text-sm mb-4">Explore Items</p>
            </div>
          </div>
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
                <div className="custom-div">
                  <img src={Pic2} alt="" />
                  <div className="absolute top-8 left-4 flex flex-col items-start">
                    <p className="text-sm mb-4">Graphic Design</p>
                    <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                      English Department
                    </h6>
                    <p className="text-sm mb-4">
                      $16.48{" "}
                      <span className="text-[#23856D] font-bold">$6.48</span>
                    </p>
                  </div>
                </div>
                <div className="custom-div">
                  <img src={Pic3} alt="" className="" />
                  <div className="absolute top-8 left-4 flex flex-col items-start">
                    <p className="text-sm mb-4">Graphic Design</p>
                    <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                      English Department
                    </h6>
                    <p className="text-sm mb-4">
                      $16.48{" "}
                      <span className="text-[#23856D] font-bold">$6.48</span>
                    </p>
                  </div>
                </div>
                <div className="custom-div">
                  <img src={Pic4} alt="" className="" />
                  <div className="absolute top-8 left-4 flex flex-col items-start">
                    <p className="text-sm mb-4">Graphic Design</p>
                    <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                      English Department
                    </h6>
                    <p className="text-sm mb-4">
                      $16.48{" "}
                      <span className="text-[#23856D] font-bold">$6.48</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full h-[20.25rem] items-center">
                <div className="custom-div">
                  <img src={Pic2} alt="" />
                  <div className="absolute top-8 left-4 flex flex-col items-start">
                    <p className="text-sm mb-4">Graphic Design</p>
                    <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                      English Department
                    </h6>
                    <p className="text-sm mb-4">
                      $16.48{" "}
                      <span className="text-[#23856D] font-bold">$6.48</span>
                    </p>
                  </div>
                </div>
                <div className="custom-div">
                  <img src={Pic3} alt="" className="" />
                  <div className="absolute top-8 left-4 flex flex-col items-start">
                    <p className="text-sm mb-4">Graphic Design</p>
                    <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                      English Department
                    </h6>
                    <p className="text-sm mb-4">
                      $16.48{" "}
                      <span className="text-[#23856D] font-bold">$6.48</span>
                    </p>
                  </div>
                </div>
                <div className="custom-div">
                  <img src={Pic4} alt="" className="" />
                  <div className="absolute top-8 left-4 flex flex-col items-start">
                    <p className="text-sm mb-4">Graphic Design</p>
                    <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                      English Department
                    </h6>
                    <p className="text-sm mb-4">
                      $16.48{" "}
                      <span className="text-[#23856D] font-bold">$6.48</span>
                    </p>
                  </div>
                </div>
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
      <section className="w-full h-[55.938rem]"></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default PageContent;
