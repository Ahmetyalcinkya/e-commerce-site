import React from "react";

const SectionOnePictureCompound = ({ image }) => {
  return (
    <div className="custom-div">
      <img src={image} alt="" />
      <div className="absolute top-8 left-4 flex flex-col items-start">
        <p className="text-sm mb-4">Your Space</p>
        <h6 className="mb-6 text-2xl font-bold w-24 text-left">Unique Life</h6>
        <p className="text-sm mb-4">Explore Items</p>
      </div>
    </div>
  );
};

export default SectionOnePictureCompound;
