import React from "react";

const SectionSixPictureCompound = ({ image }) => {
  return (
    <div className="flex flex-col w-60 gap-y-6 iphone:gap-y-0">
      <img className="w-60 h-[17.5rem]" src={image} alt="" />
      <div className="flex flex-col text-center iphone:text-left">
        <h5>Graphic Design</h5>
        <a href="#">English Department</a>
        <h5>
          $16.48 <span>$6.48</span>
        </h5>
      </div>
    </div>
  );
};

export default SectionSixPictureCompound;
