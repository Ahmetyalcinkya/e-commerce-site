import { Carousel, Typography, Button } from "@material-tailwind/react";
import Pic1 from "../../../Assets/shop-hero-3-product-slide-2.jpg";
import { Link } from "react-router-dom";

export function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl h-[40rem] w-full">
      <div className="relative h-full w-full">
        <img src={Pic1} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-64 flex flex-col justify-around items-center iphone:w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-montserrat"
            >
              GROCERIES DELIVERY
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="opacity-80 w-72 iphone:w-[33.5rem] font-montserrat"
            >
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link
                to="/shopping"
                className="w-[12.25rem] flex p-2 bg-blue-500 iphone:w-[12.75rem] h-16 m-auto rounded-lg justify-center items-center text-white font-bold text-base leading-8 tracking-wider my-4"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={Pic1} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-64 flex flex-col justify-around items-center iphone:w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-montserrat"
            >
              GROCERIES DELIVERY
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="opacity-80 w-72 iphone:w-[33.5rem] font-montserrat"
            >
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link
                to="/shopping"
                className="w-[12.25rem] flex p-2 bg-blue-500 iphone:w-[12.75rem] h-16 m-auto rounded-lg justify-center items-center text-white font-bold text-base leading-8 tracking-wider my-4"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={Pic1} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-64 flex flex-col justify-around items-center iphone:w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-montserrat"
            >
              GROCERIES DELIVERY
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="opacity-80 w-72 iphone:w-[33.5rem] font-montserrat"
            >
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link
                to="/shopping"
                className="w-[12.25rem] flex p-2 bg-blue-500 iphone:w-[12.75rem] h-16 m-auto rounded-lg justify-center items-center text-white font-bold text-base leading-8 tracking-wider my-4"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
