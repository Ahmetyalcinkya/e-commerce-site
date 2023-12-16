import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const ResponsiveDropdown = () => {
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  };

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="iphone:hidden" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="xl" id="menu-icon" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-5 w-40 origin-top-right rounded-md bg-[#FAFAFA] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div className="px-2 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-gray-700 text-white"
                    } group flex items-center rounded-md px-2 py-2 text-sm`}
                    href="/"
                  >
                    Home
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-2 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-gray-700 text-white"
                    } group flex items-center rounded-md px-2 py-2 text-sm`}
                    href="/shopping"
                  >
                    Shop
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-2 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-gray-700 text-white"
                    } group flex items-center rounded-md px-2 py-2 text-sm`}
                    href="/about"
                  >
                    About
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-2 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-gray-700 text-white"
                    } group flex items-center rounded-md px-2 py-2 text-sm`}
                    href="/pricing"
                  >
                    Pricing
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-2 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-gray-700 text-white"
                    } group flex items-center rounded-md px-2 py-2 text-sm`}
                    href="/contact"
                  >
                    Contact
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-2 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-gray-700 text-white"
                    } group flex items-center rounded-md px-2 py-2 text-sm`}
                    href="/team"
                  >
                    Team
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-2 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div className=" group flex items-center rounded-md px-2 py-2 text-sm">
                    <FontAwesomeIcon icon={faUser} color="#23A6F0" />
                    <a
                      className={` group flex items-center rounded-md px-1 py-1 text-sm`}
                      href="/login"
                    >
                      Login
                    </a>
                    <h4 className="text-[#23A6F0]">/</h4>
                    <a
                      className={` group flex items-center rounded-md px-1 py-1 text-sm`}
                      href="/signup"
                    >
                      Register
                    </a>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ResponsiveDropdown;
