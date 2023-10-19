import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const AboutPageHeader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[65.625rem] h-24 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl leading-8">
          Bandage
        </Link>
        <nav className="w-[51rem] h-16 flex justify-between items-center">
          <div className="w-72 h-6 flex justify-between">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Shop</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="flex w-[19rem] h-12 justify-between items-center">
            <NavLink to="/login" className="text-[#23A6F0] font-bold">
              Login
            </NavLink>
            <button className="w-52 h-12 bg-[#23A6F0] text-white font bold text-sm leading-5">
              Become a member <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AboutPageHeader;
