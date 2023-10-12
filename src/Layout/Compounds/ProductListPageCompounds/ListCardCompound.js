import React from "react";

const ListCardCompound = ({ image }) => {
  return (
    <div className="flex flex-col w-60 h-[30rem] justify-around items-center">
      <img src={image} alt="" />
      <h5 className="text-base font-bold text-[#252B42]">Graphic Design</h5>
      <a
        href="#"
        className="font-bold leading-tight tracking-wider text-[#737373]"
      >
        English Department
      </a>
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
  );
};

export default ListCardCompound;
