import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { RxSlash } from "react-icons/rx";

const Header = () => {
  return (
    <header className="flex">
      <div className="flex w-[82.625rem] justify-between m-auto mt-4 items-center h-[5.688rem]">
        <Link
          to="/"
          className="flex ml-[8.5rem] w-44 h-14 items-center font-extrabold"
        >
          Bandage
        </Link>
        <div className="flex w-[68.25rem] mr-[8.5rem] justify-around h-14 items-center">
          <nav className="flex w-[22.5rem] justify-between">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="flex">
            <div className="flex items-center w-[10.375rem] justify-around px-4">
              <AiOutlineUser color="blue" size={20} />
              <NavLink to="/login">Login</NavLink>
              <RxSlash color="blue" />
              <NavLink to="/register">Register</NavLink>
            </div>
            <div className="flex w-[9.875rem] justify-between px-8 items-center cursor-pointer">
              <AiOutlineSearch size={20} />
              <div className="flex items-center cursor-pointer">
                <BsCart2 size={20} />
                <p className="ml-1">2</p>
              </div>
              <div className="flex items-center cursor-pointer">
                <AiOutlineHeart size={20} />
                <p className="ml-1">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
