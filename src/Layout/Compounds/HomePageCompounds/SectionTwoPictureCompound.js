import React from "react";

const SectionTwoPictureCompound = ({ image }) => {
  return (
    <div className="custom-div">
      <img src={image} alt="" />
      <div className="absolute top-8 left-4 flex flex-col items-start">
        <p className="text-sm mb-4">Graphic Design</p>
        <h6 className="mb-6 text-2xl font-bold w-24 text-left">
          English Department
        </h6>
        <p className="text-sm mb-4">
          $16.48 <span className="text-[#23856D] font-bold">$6.48</span>
        </p>
      </div>
    </div>
  );
};

export default SectionTwoPictureCompound;
