import React from "react";
import SliderCompound from "../../Compounds/HomePageCompounds/SliderCompound";
import data from "../../../Data/data";
import ScrollContainer from "react-indiana-drag-scroll";

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
      <section className="flex w-full h-[24.5rem] bg-gray-500 justify-center items-center">
        <div className="flex w-[67.75rem] h-[14.5rem] items-center justify-between">
          <div className="custom-div">
            <img
              src="https://assets.iceland.co.uk/i/iceland/starbucks_caffe_latte_chilled_coffee_220ml_76830_T596.jpg?$pdpzoom$"
              alt=""
              className="max-h-full ml-20"
            />
            <div className="absolute top-8 left-4 flex flex-col items-start">
              <p className="text-sm mb-4">Your Space</p>
              <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                Unique Life
              </h6>
              <p className="text-sm mb-4">Explore Items</p>
            </div>
          </div>
          <div className="custom-div">
            <img
              src="https://assets.iceland.co.uk/i/iceland/starbucks_caffe_latte_chilled_coffee_220ml_76830_T596.jpg?$pdpzoom$"
              alt=""
              className="max-h-full ml-20"
            />
            <div className="absolute top-8 left-4 flex flex-col items-start">
              <p className="text-sm mb-4">Your Space</p>
              <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                Unique Life
              </h6>
              <p className="text-sm mb-4">Explore Items</p>
            </div>
          </div>
          <div className="custom-div">
            <img
              src="https://assets.iceland.co.uk/i/iceland/starbucks_caffe_latte_chilled_coffee_220ml_76830_T596.jpg?$pdpzoom$"
              alt=""
              className="max-h-full ml-20"
            />
            <div className="absolute top-8 left-4 flex flex-col items-start">
              <p className="text-sm mb-4">Your Space</p>
              <h6 className="mb-6 text-2xl font-bold w-24 text-left">
                Unique Life
              </h6>
              <p className="text-sm mb-4">Explore Items</p>
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
      <section></section>
    </div>
  );
};

export default PageContent;
