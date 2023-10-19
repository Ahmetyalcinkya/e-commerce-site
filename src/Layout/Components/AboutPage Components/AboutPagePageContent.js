import React from "react";
import Pic1 from "../../../Assets/none.png";
import TeamMemberCompound from "../../Compounds/GlobalCompounds/TeamMemberCompound";
import BrandsCompound from "../../Compounds/GlobalCompounds/BrandsCompound";
import Pic2 from "../../../Assets/unsplash_vjMgqUkS8q8.png";

const AboutPagePageContent = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-[65.625rem] h-[34rem] flex justify-between items-center">
        <div className="flex flex-col justify-between w-[37.5rem] h-80 text-left">
          <h5 className="font-bold text-base leading-6">ABOUT COMPANY</h5>
          <h1 className="font-bold text-6xl">ABOUT US</h1>
          <h4 className="text-xl text-[#737373] w-[23.5rem] h-16">
            We know how large objects will act, but things on a small scale
          </h4>
          <button className="w-48 h-14 flex justify-center items-center font-bold text-sm leading-5 text-white bg-[#23A6F0] rounded">
            Get Quote Now
          </button>
        </div>
        <div>
          <img src={Pic1} alt="" />
        </div>
      </div>
      <div className="w-full h-60 flex justify-center items-center">
        <div className="flex w-[63.5rem] h-48 justify-around items-center">
          <div className="flex flex-col justify-around gap-y-6">
            <p className="text-[#E74040] font-normal text-sm leading-5 text-left">
              Problems trying
            </p>
            <h3 className="font-bold text-2xl leading-8 w-[24.5rem] h-24 text-left">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
          </div>
          <div className="w-[33rem] h-10 flex items-center justify-center text-left">
            <p className="font-normal text-sm leading-5 text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-64 flex justify-center items-center">
        <div className="w-[65.625rem] h-full flex justify-between items-center">
          <div className="w-60 h-28 flex flex-col justify-center items-center">
            <h1 className="font-bold text-6xl leading-[5rem] text-[#252B42]">
              15K
            </h1>
            <h5 className="font-bold text-base leading-6 text-[#737373]">
              Happy Customers
            </h5>
          </div>
          <div className="w-60 h-28 flex flex-col justify-center items-center">
            <h1 className="font-bold text-6xl leading-[5rem] text-[#252B42]">
              150K
            </h1>
            <h5 className="font-bold text-base leading-6 text-[#737373]">
              Monthly Visitors
            </h5>
          </div>
          <div className="w-60 h-28 flex flex-col justify-center items-center">
            <h1 className="font-bold text-6xl leading-[5rem] text-[#252B42]">
              15
            </h1>
            <h5 className="font-bold text-base leading-6 text-[#737373]">
              Countries Worldwide
            </h5>
          </div>
          <div className="w-60 h-28 flex flex-col justify-center items-center">
            <h1 className="font-bold text-6xl leading-[5rem] text-[#252B42]">
              100+
            </h1>
            <h5 className="font-bold text-base leading-6 text-[#737373]">
              Top Partners
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full h-[47.75rem] flex justify-center items-center">
        <div className="w-[61.813rem] h-[33.75rem] rounded-2xl">
          <iframe
            width="989"
            height="540"
            src="https://www.youtube.com/embed/wf4F2-9UXUo?si=h1ywCeOGVLeugTZT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[65.625rem] h-[51rem] flex flex-col justify-around items-center">
          <div className="w-[38rem] h-24 flex flex-col justify-between items-center">
            <h2 className="font-bold text-4xl leading-[3rem] text-[#252B42]">
              Meet Our Team
            </h2>
            <p className="font-normal text-sm leading-5 text-[#737373] w-[29rem] h-10">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <TeamMemberCompound />
        </div>
      </div>
      <div className="w-full h-[30rem] bg-[#FAFAFA] flex flex-col justify-around items-center">
        <div className="w-[54rem] h-32 flex flex-col justify-between items-center">
          <h2 className="font-bold text-4xl text-[#252B42]">
            Big Companies Are Here
          </h2>
          <p className="w-[34rem] h-10 text-center font-normal text-sm leading-5 text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <BrandsCompound />
      </div>
      <div className="w-full h-[40rem] bg-[#2A7CC7] relative flex justify-center items-center">
        <img src={Pic2} alt="" className="absolute right-0 h-[40rem]" />
        <div className="w-[65.625rem] h-[32rem] flex flex-col text-left justify-around text-white">
          <h5 className="font-bold text-base leading-6">WORK WITH US</h5>
          <h2 className="font-bold text-4xl leading-[3rem]">
            Now Let’s grow Yours
          </h2>
          <p className="text-sm leading-5 w-[27.5rem] h-10">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <button className="font-bold text-sm leading-6 text-[#FAFAFA] text-left w-32 h-12 py-4 px-10 border flex justify-center items-center rounded">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPagePageContent;
