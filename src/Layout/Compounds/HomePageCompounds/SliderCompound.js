import React from "react";
import { Link } from "react-router-dom";

const SliderCompound = ({ image }) => {
  return (
    <div className="flex flex-col flex-shrink-0">
      <img
        className="w-[90rem] h-[40rem] z-0"
        src={image.cover}
        alt="slider-img"
      />
      {/* slider **** resim üzerindeki yazılar buraya eklenecek!!! */}
      <div className="flex z-20 flex-col w-[43.75rem] m-auto px-10 h-80 items-center justify-center">
        <h1 className="text-[3.625rem] font-bold leading-[5rem] w-[41.125rem]">
          GROCERIES DELIVERY
        </h1>
        <p className="text-xl w-[33.5rem] leading-7 justify-center tracking-wider">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
        <Link
          to="/products"
          className=" flex p-2 bg-blue-500 w-[12.75rem] h-16 m-auto rounded-lg justify-center items-center text-white font-bold text-base leading-8 tracking-wider my-4"
        >
          Start Now
        </Link>
      </div>
    </div>
  );
};

export default SliderCompound;
