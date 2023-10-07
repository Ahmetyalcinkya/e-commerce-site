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
    </div>
  );
};

export default PageContent;
