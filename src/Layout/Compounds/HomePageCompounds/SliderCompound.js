import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SliderCompound = ({ image }) => {
  //ÇALIŞMADI !!!
  const sliderRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (sliderRef.current) {
      const scrollHandle = () => {
        const isEnd =
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth ===
          sliderRef.current.scrollWidth;
        const isBegin = sliderRef.current.scrollLeft === 0;
        setPrev(isBegin);
        setNext(isEnd);
      };

      scrollHandle();
      sliderRef.current.addEventListener("scroll", scrollHandle());

      return () => {
        sliderRef?.current?.removeEventListener("scroll", scrollHandle());
      };
    }
  }, [sliderRef]);

  const slideNext = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth - 300;
  };
  const slidePrev = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth - 300;
  };
  //ÇALIŞMADI!!!

  return (
    <div
      ref={sliderRef}
      className="w-full flex flex-col flex-shrink-0 relative justify-center items-center"
    >
      <img
        className="w-full h-[40rem] z-0"
        src={image.cover}
        alt="slider-img"
      />
      {/* slider **** resim üzerindeki yazılar buraya eklenecek!!! */}

      {/* ÇALIŞMADI!!! */}

      {prev && (
        <button
          onClick={slidePrev}
          className="absolute left-10 text-5xl text-white"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {next && (
        <button
          onClick={slideNext}
          className="absolute right-10 text-5xl text-white"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}

      {/* ÇALIŞMADI!!! */}

      <div className="flex z-20 flex-col w-[43.75rem] m-auto px-10 h-80 items-center justify-center absolute text-white">
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
        <div></div>
      </div>
    </div>
  );
};

export default SliderCompound;
