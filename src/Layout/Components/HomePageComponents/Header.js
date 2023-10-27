import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { CgFormatSlash } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ResponsiveDropdown from "../../Compounds/GlobalCompounds/ResponsiveDropdown";

const Header = () => {
  return (
    <header className="flex w-full px-10 py-4 iphone:p-0 m-auto justify-around iphone:justify-between iphone:w-[82.625rem] iphone:h-[5.688rem] items-center">
      <Link
        to="/"
        className="flex logo w-28 h-8 iphone:ml-[8.5rem] iphone:w-44 iphone:h-14 iphone:items-center"
      >
        Bandage
      </Link>
      <div className="flex items-center flex-col-reverse iphone:flex-row justify-around w-24 h-14 iphone:w-[68.25rem] iphone:mr-[8.5rem] ">
        <nav className="hidden items-center iphone:flex iphone:w-[22.5rem] iphone:justify-between">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/team">Team</NavLink>
        </nav>
        <div className="flex w-full iphone:w-auto">
          <div className="hidden iphone:flex items-center w-[10.375rem] justify-around px-4 gap-x-2">
            <FontAwesomeIcon icon={faUser} color="#23A6F0" />
            <NavLink to="/login" className="primary font-bold">
              Login
            </NavLink>
            <CgFormatSlash color="#23A6F0" />
            <NavLink to="/signup" className="primary font-bold">
              Register
            </NavLink>
          </div>
          <div className="flex w-full iphone:w-[9.875rem] justify-around iphone:justify-around items-center cursor-pointer">
            <div className="">
              <AiOutlineSearch size={28} color="#23A6F0" />
            </div>
            <div className="flex banner-icon">
              <BsCart2 size={28} color="#23A6F0" />
              <p className="ml-1 primary">2</p>
            </div>
            <div className="hidden iphone:flex banner-icon">
              <AiOutlineHeart size={28} color="#23A6F0" />
              <p className="ml-1 primary">2</p>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveDropdown />
    </header>
  );
};

export default Header;
