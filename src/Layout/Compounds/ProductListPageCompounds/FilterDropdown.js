import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const options = [
  { name: "Best to Worst", sort: "rating:desc" },
  { name: "Worst to Best", sort: "rating:asc" },
  { name: "Highest Price", sort: "price:desc" },
  { name: "Lowest Price", sort: "price:asc" },
];

const FilterDropdown = ({ filterHandler }) => {
  const [selected, setSelected] = useState(options[0]);

  const multipleFunc = (value) => {
    const selectedOption = value;
    filterHandler(selectedOption);
    setSelected(selectedOption);
  };

  return (
    <Listbox value={selected} onChange={multipleFunc}>
      <div className="relative w-40 mt-1">
        <Listbox.Button className="w-36 flex justify-between items-center">
          {selected.name} <FontAwesomeIcon icon={faFilter} color="#23A6F0" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            <Listbox.Option
              className={({ active }) =>
                `relative cursor-default select-none py-2  ${
                  active ? "bg-primary text-white" : "text-gray-900"
                }`
              }
              disabled={true}
            >
              Filter
            </Listbox.Option>
            {options.map((option, index) => (
              <Listbox.Option
                className={({ active }) =>
                  `relative cursor-default select-none py-2  ${
                    active ? "bg-primary text-white" : "text-gray-900"
                  }`
                }
                key={index}
                value={option}
                disabled={option.unavailable}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default FilterDropdown;
