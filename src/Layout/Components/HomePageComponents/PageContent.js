import React from "react";
import SliderCompound from "../../Compounds/HomePageCompounds/SliderCompound";
import data from "../../../Data/data";
import ScrollContainer from "react-indiana-drag-scroll";
import Pic2 from "../../../Assets/h5-baner-3 1.png";
import Pic3 from "../../../Assets/media bg-cover.png";
import Pic4 from "../../../Assets/media bg-cover (1).png";
import Pic5 from "../../../Assets/card-cover-5.jpg";

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
          <div className="w-[41.125rem]">
            <div>
              <p className="h-[3.125rem]">pagination</p>
            </div>
            <hr />
            <div>
              <div className="flex">
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
              <div className="flex">
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
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default PageContent;
