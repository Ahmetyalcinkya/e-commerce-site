import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { CgFormatSlash } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  };

  return (
    <header className="flex w-[23.5rem] h-[33.5rem] m-auto items-start justify-between iphone:w-[82.625rem] iphone:h-[5.688rem] iphone:items-center">
      <Link
        to="/"
        className="flex logo w-28 h-8 iphone:ml-[8.5rem] iphone:w-44 iphone:h-14 iphone:items-center"
      >
        Bandage
      </Link>
      <div className="flex items-center justify-around w-48 h-14 iphone:w-[68.25rem] iphone:mr-[8.5rem] ">
        <nav
          className={
            isActive
              ? "absolute top-20 gap-y-2 flex flex-col justify-center items-center w-full h-48"
              : "hidden iphone:flex iphone:w-[22.5rem] iphone:justify-between"
          }
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/team">Team</NavLink>
        </nav>
        <div className="flex">
          <div className="hidden iphone:flex items-center w-[10.375rem] justify-around px-4 gap-x-2">
            <FontAwesomeIcon icon={faUser} color="#23A6F0" />
            <NavLink to="/login" className="primary font-bold">
              Login
            </NavLink>
            <CgFormatSlash color="#23A6F0" />
            <NavLink to="/register" className="primary font-bold">
              Register
            </NavLink>
          </div>
          <div className="flex w-[9.875rem] justify-between px-8 items-center cursor-pointer">
            <div className="">
              <AiOutlineSearch size={20} color="#23A6F0" />
            </div>
            <div className="flex banner-icon">
              <BsCart2 size={20} color="#23A6F0" />
              <p className="ml-1 primary">2</p>
            </div>
            <div className="hidden iphone:flex banner-icon">
              <AiOutlineHeart size={20} color="#23A6F0" />
              <p className="ml-1 primary">2</p>
            </div>
          </div>
        </div>
      </div>
      <button className="mr-10 iphone:hidden" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="xl" id="menu-icon" />
      </button>
    </header>
  );
};

export default Header;
