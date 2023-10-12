import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductListFooter = () => {
  return (
    <div className="flex flex-col items-center justify-between pt-10">
      <div className="flex justify-between items-center w-[65.625rem] h-14">
        <h3 className="font-bold text-2xl">Bandage</h3>
        <div className="flex w-28 h-6 justify-around">
          <FontAwesomeIcon icon={faFacebook} size="xl" color="#23A6F0" />
          <FontAwesomeIcon icon={faInstagram} size="xl" color="#23A6F0" />
          <FontAwesomeIcon icon={faTwitter} size="xl" color="#23A6F0" />
        </div>
      </div>
      <div className="flex justify-between items-center w-[65.625rem] h-64">
        <div className="h-72 w-full flex justify-center items-center text-[#737373]">
          <div className="w-[65rem] h-[10.625rem] flex justify-between">
            <div className="flex flex-col text-left w-[9.25rem] h-[10.625rem] justify-between">
              <h5 className="font-bold text-base leading-6">Company</h5>
              <div className="flex flex-col gap-y-2.5">
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are hiring</a>
                <a href="#">Blog</a>
              </div>
            </div>
            <div className="flex flex-col text-left w-[9.25rem] h-[10.625rem] justify-between">
              <h5 className="font-bold text-base leading-6">Legal</h5>
              <div className="flex flex-col gap-y-2.5">
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are hiring</a>
                <a href="#">Blog</a>
              </div>
            </div>
            <div className="flex flex-col text-left w-[9.25rem] h-[10.625rem] justify-between">
              <h5 className="font-bold text-base leading-6">Features</h5>
              <div className="flex flex-col gap-y-2.5">
                <a href="#">Business Marketing</a>
                <a href="#">User Analytic</a>
                <a href="#">Live Chat</a>
                <a href="#">Unlimited Support</a>
              </div>
            </div>
            <div className="flex flex-col text-left w-[9.25rem] h-[10.625rem] justify-between">
              <h5 className="font-bold text-base leading-6">Resources</h5>
              <div className="flex flex-col gap-y-2.5">
                <a href="#">IOS & Android</a>
                <a href="#">Watch a Demo</a>
                <a href="#">Customers</a>
                <a href="#">API</a>
              </div>
            </div>
            <div className="flex flex-col text-left w-80 h-[9.5rem] justify-around">
              <h5 className="font-bold text-base leading-6">Get In Touch</h5>
              <div className="flex flex-col gap-y-2.5">
                <label>
                  <input
                    className="w-48 h-14 border rounded p-2"
                    type="email"
                    placeholder="Your Email"
                  />
                  <button className="w-32 h-14 bg-[#23A6F0] text-white rounded">
                    Subscribe
                  </button>
                </label>
                <p className="text-sm text-[#737373]">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full bg-[#FAFAFA] h-20 flex justify-center items-center">
        <div className="w-[65.625rem] flex justify-start">
          <h6 className="text-[#737373] font-bold text-sm">
            Made With Love By Finland All Right Reserved
          </h6>
        </div>
      </footer>
    </div>
  );
};

export default ProductListFooter;
