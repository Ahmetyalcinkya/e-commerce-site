import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { CgFormatSlash } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ResponsiveDropdown from "../../Compounds/GlobalCompounds/ResponsiveDropdown";
import { MD5 } from "crypto-js";
import { useSelector } from "react-redux";
import { fetchStates } from "../../../redux/features/product/productSlice";
import HeaderDropdown from "./HeaderDropdown";
import ShoppingCartDropdown from "../../Compounds/HomePageCompounds/ShoppingCartDropdown";

const Header = () => {
  const userFetched = useSelector(
    (state) => state.user.fetchStates === fetchStates.fetched
  );

  const userGravatar = useSelector((state) => state.user.user.email);
  const userGravatarName = useSelector((state) => state.user.user.name);

  return (
    <header className="flex w-full px-10 py-4 iphone:p-0 m-auto justify-between iphone:w-[75.313rem] iphone:h-[5.688rem] items-center">
      <Link
        to="/"
        className="flex logo w-28 h-8 iphone:ml-[8.5rem] iphone:w-44 iphone:h-14 iphone:items-center"
      >
        Bandage
      </Link>
      <div className="flex items-center flex-col-reverse iphone:flex-row justify-around w-24 h-14 iphone:w-[68.25rem] iphone:mr-[8.5rem] ">
        <nav className="hidden items-center iphone:flex iphone:w-[22.5rem] iphone:justify-between">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shopping" className=" w-16 flex justify-between">
            Shop
            <HeaderDropdown />
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/team">Team</NavLink>
        </nav>
        <div className="flex w-full iphone:w-auto">
          {userFetched ? (
            <div className="hidden iphone:flex items-center w-[15rem] justify-around px-4 gap-x-2">
              <img
                className="rounded-full w-12 h-12"
                src={`https://www.gravatar.com/avatar/${MD5(userGravatar)}`}
                alt=""
              />
              <div className="w-full">{userGravatarName}</div>
            </div>
          ) : (
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
          )}

          <div className="flex w-full iphone:w-[9.875rem] justify-around iphone:justify-around items-center cursor-pointer">
            <div className="">
              <AiOutlineSearch size={28} color="#23A6F0" />
            </div>
            <ShoppingCartDropdown />
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
