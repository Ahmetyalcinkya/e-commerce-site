import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderDropdown = () => {
  const productCategories = useSelector((state) => state.global.categories);
  return (
    <Menu as="div" className="relative inline-block text-left z-50 ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center  px-2 text-sm font-medium text-black">
          <FontAwesomeIcon icon={faChevronDown} />
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            {productCategories.map((category) => (
              <Menu.Item key={category.id}>
                {({ active }) => (
                  <Link
                    to={`/shopping/${category.code}`}
                    className={`${
                      active ? "bg-violet-500 text-black" : "text-gray-400"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {category.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HeaderDropdown;
