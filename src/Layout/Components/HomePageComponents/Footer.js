import React from "react";
import { Icon } from "../../../Icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full h-[98rem] iphone:h-[30rem] bg-tertiary flex flex-col items-center justify-around gap-y-16 iphone:gap-y-0">
      <div className="flex w-60 flex-col h-60 py-0 justify-around items-start iphone:flex-row iphone:w-[65.625rem] iphone:h-[8.875rem] iphone:py-10 iphone:justify-between">
        <div className="flex flex-col text-white text-left">
          <h3 className="font-bold text-2xl leading-8 tracking-wide">
            Consulting Agency For Your Business
          </h3>
          <p className="text-sm leading-5 tracking-wider">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <button className="text-white py-4 px-10 bg-primary rounded">
          Contact Us
        </button>
      </div>
      <div className="iphone:h-72 w-full flex-col row-centered text-white">
        <div className="items-start w-60 iphone:w-[65rem] iphone:h-[10.625rem] flex flex-col iphone:flex-row justify-between  gap-y-8 iphone:gap-y-0">
          <div className="footer-div">
            <h5 className="footer-header">Company</h5>
            <div className="flex flex-col gap-y-2.5">
              <a href="#">About Us</a>
              <a href="#">Carrier</a>
              <a href="#">We are hiring</a>
              <a href="#">Blog</a>
            </div>
          </div>
          <div className="footer-div">
            <h5 className="footer-header">Legal</h5>
            <div className="flex flex-col gap-y-2.5">
              <a href="#">About Us</a>
              <a href="#">Carrier</a>
              <a href="#">We are hiring</a>
              <a href="#">Blog</a>
            </div>
          </div>
          <div className="footer-div">
            <h5 className="footer-header">Features</h5>
            <div className="flex flex-col gap-y-2.5">
              <a href="#">Business Marketing</a>
              <a href="#">User Analytic</a>
              <a href="#">Live Chat</a>
              <a href="#">Unlimited Support</a>
            </div>
          </div>
          <div className="footer-div">
            <h5 className="footer-header">Resources</h5>
            <div className="flex flex-col gap-y-2.5">
              <a href="#">IOS & Android</a>
              <a href="#">Watch a Demo</a>
              <a href="#">Customers</a>
              <a href="#">API</a>
            </div>
          </div>
          <div className="flex flex-col text-left w-full iphone:w-72 h-[9.5rem] justify-between">
            <h5 className="footer-header">Get In Touch</h5>
            <div className="flex flex-col gap-y-2.5">
              <div className="flex">
                <span className="w-8 h-8">
                  <Icon name="phone" size={20} />
                </span>
                <h6>(480) 555-0103</h6>
              </div>
              <div className="flex">
                <span className="w-8 h-8">
                  <Icon name="location" size={20} />
                </span>
                <h6>4517 Washington Ave.</h6>
              </div>
              <div className="flex">
                <span className="w-8 h-8">
                  <Icon name="mail" size={20} />
                </span>
                <h6>debra.holt@example.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col iphone:flex-row w-60 h-32 iphone:w-[65.625rem] iphone:h-[4.75rem] items-center justify-between mt-16 iphone:mt-0 text-left">
        <h6 className="font-bold text-sm leading-8 tracking-wider text-white">
          Copyright © 2023 by Ahmet Can Yalçınkaya
        </h6>
        <div className="flex gap-x-5">
          <span className="w-[1.438rem] h-[1.438rem] text-[#23A6F0]">
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span className="w-[1.438rem] h-[1.438rem] text-[#23A6F0]">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span className="w-[1.438rem] h-[1.438rem] text-[#23A6F0]">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
