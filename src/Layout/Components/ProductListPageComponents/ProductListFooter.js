import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductListFooter = () => {
  return (
    <div className="flex h-[80rem] iphone:h-[30rem] flex-col items-center justify-between pt-10 gap-y-16 iphone:gap-y-0">
      <div className="flex w-60 h-20 justify-between items-center iphone:w-[65.625rem] iphone:h-14">
        <h3 className="font-bold text-2xl">Bandage</h3>
        <div className="flex w-28 h-6 justify-around">
          <FontAwesomeIcon icon={faFacebook} size="xl" color="#23A6F0" />
          <FontAwesomeIcon icon={faInstagram} size="xl" color="#23A6F0" />
          <FontAwesomeIcon icon={faTwitter} size="xl" color="#23A6F0" />
        </div>
      </div>
      <div className="flex justify-between items-center w-full iphone:w-[65.625rem] iphone:h-64">
        <div className="iphone:h-72 w-full flex justify-center items-center text-secondary">
          <div className="w-60 flex-col iphone:flex-row iphone:w-[65rem] iphone:h-[10.625rem] flex justify-between gap-y-8 iphone:gap-y-0">
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
            <div className="flex flex-col text-left w-80 h-[9.5rem] justify-around">
              <h5 className="footer-header">Get In Touch</h5>
              <div className="flex flex-col gap-y-2.5">
                <label>
                  <input
                    className="w-48 h-14 border rounded p-2"
                    type="email"
                    placeholder="Your Email"
                  />
                  <button className="w-32 h-14 bg-primary text-white rounded">
                    Subscribe
                  </button>
                </label>
                <p className="text-sm text-secondary">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full bg-secondary h-20 flex justify-center items-center">
        <div className="w-full iphone:w-[65.625rem] flex justify-start">
          <h6 className="text-secondary font-bold text-sm">
            Made With Love By Finland All Right Reserved
          </h6>
        </div>
      </footer>
    </div>
  );
};

export default ProductListFooter;
