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
              <div className="flex flex-col w-60">
                <img className="w-60 h-[17.5rem]" src={Pic11} alt="" />
                <div className="flex flex-col text-left">
                  <h5>Graphic Design</h5>
                  <a href="#">English Department</a>
                  <h5>
                    $16.48 <span>$6.48</span>
                  </h5>
                </div>
              </div>
              <div className="flex flex-col w-60">
                <img className="w-60 h-[17.5rem]" src={Pic12} alt="" />
                <div className="flex flex-col text-left">
                  <h5>Graphic Design</h5>
                  <a href="#">English Department</a>
                  <h5>
                    $16.48 <span>$6.48</span>
                  </h5>
                </div>
              </div>
              <div className="flex flex-col w-60">
                <img className="w-60 h-[17.5rem]" src={Pic13} alt="" />
                <div className="flex flex-col text-left">
                  <h5>Graphic Design</h5>
                  <a href="#">English Department</a>
                  <h5>
                    $16.48 <span>$6.48</span>
                  </h5>
                </div>
              </div>
              <div className="flex flex-col w-60">
                <img className="w-60 h-[17.5rem]" src={Pic14} alt="" />
                <div className="flex flex-col text-left">
                  <h5>Graphic Design</h5>
                  <a href="#">English Department</a>
                  <h5>
                    $16.48 <span>$6.48</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default PageContent;
