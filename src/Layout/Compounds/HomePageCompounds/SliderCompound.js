import React from "react";

const SliderCompound = ({ image }) => {
  return (
    <div className="flex-shrink-0">
      <img className="w-[90rem] h-[40rem]" src={image.cover} alt="slider-img" />
      {/* slider **** resim üzerindeki yazılar buraya eklenecek!!! */}
    </div>
  );
};

export default SliderCompound;
