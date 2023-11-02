import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import DropdownButton from "../../Compounds/HomePageCompounds/DropdownButton";

const HeaderDropdown = () => {
  const productCategories = useSelector((state) => state.global.categories);
  return (
    <Menu as="nav">
      {({ open }) => (
        <>
          <Menu.Button>
            <FontAwesomeIcon icon={faChevronDown} />
          </Menu.Button>
          {open && (
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items>
                {({ active }) =>
                  active &&
                  productCategories.map((category, index) => (
                    <DropdownButton key={index} category={category} />
                  ))
                }
              </Menu.Items>
            </Transition>
          )}
        </>
      )}
    </Menu>
  );
};

export default HeaderDropdown;
