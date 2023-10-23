import React from "react";
import { Icon } from "../../../Icons/icons";

const SectionEightProductCard = ({ image }) => {
  return (
    <div className="flex flex-col w-[20.5rem] h-[37.5rem] gap-y-4 border">
      <img className="h-[18.75rem]" src={image} alt="" />
      <div className="flex flex-col gap-y-4 p-4">
        <div className="flex w-40 h-6 justify-between">
          <a href="#" className="text-seventh">
            Google
          </a>
          <a href="#">Trending</a>
          <a href="#">New</a>
        </div>
        <h4 className="w-[15.625rem] h-16 text-xl leading-8 text-left mb-1">
          Loudest à la Madison #1 (L'integral)
        </h4>
        <p className="text-sm leading-5 tracking-wider text-left w-[17.5rem] h-16 text-secondary">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <Icon name="time" size={16} />
            <p>22 April 2021</p>
          </div>
          <div className="flex items-center gap-x-1">
            <Icon name="graphic" size={16} />
            <p>10 Comments</p>
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <h6 className="font-bold text-sm leading-8 tracking-wider text-secondary">
            Learn More
          </h6>
          <Icon name="rightDir" size={16} />
        </div>
      </div>
    </div>
  );
};

export default SectionEightProductCard;
