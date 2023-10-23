import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { CgFormatSlash } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex">
      <div className="flex w-[82.625rem] justify-between m-auto items-center h-[5.688rem]">
        <Link to="/" className="flex ml-[8.5rem] w-44 h-14 items-center logo">
          Bandage
        </Link>
        <span className="block sm:hidden">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </span>
        <div className="flex w-[68.25rem] mr-[8.5rem] justify-around h-14 items-center">
          <nav className="top-full w-full px-4 flex flex-col sm:w-[22.5rem] sm:flex-row justify-between">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/team">Team</NavLink>
          </nav>
          <div className="flex">
            <div className="flex items-center w-[10.375rem] justify-around px-4 gap-x-2">
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
              <AiOutlineSearch size={20} color="#23A6F0" />
              <div className="banner-icon">
                <BsCart2 size={20} color="#23A6F0" />
                <p className="ml-1 primary">2</p>
              </div>
              <div className="banner-icon">
                <AiOutlineHeart size={20} color="#23A6F0" />
                <p className="ml-1 primary">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
