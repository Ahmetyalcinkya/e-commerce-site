import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Listbox, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const options = [
  { name: "Default", id: 1 },
  { name: "Best to Worst", id: 2 },
  { name: "Worst to Best", id: 3 },
  { name: "Price", id: 4 },
  { name: "Rating", id: 5 },
];

const FilterDropdown = () => {
  const productList = useSelector((state) => state.product.productList);

  const [selected, setSelected] = useState(options[0]);

  const [products, setProducts] = useState(productList);

  // Sorting functions
  const best = [...productList.products];

  const bestSortedProducts = best.sort((a, b) => {
    return b.sell_count - a.sell_count;
  });
  const sortedPrice = best.sort((a, b) => {
    return b.price - a.price;
  });
  const sortedRatings = best.sort((a, b) => {
    return b.rating - a.rating;
  });
  console.log(bestSortedProducts.reverse());

  const productChangeHandler = () => {
    if (selected.id === 1) {
      return setProducts(productList);
    } else if (selected.id === 2) {
      // best-to-worst
      return setProducts(bestSortedProducts);
    } else if (selected.id === 3) {
      // worst-to-best
      return setProducts(bestSortedProducts.reverse());
    } else if (selected.id === 4) {
      // price
      return setProducts(sortedPrice);
    } else if (selected.id === 5) {
      // rating
      return setProducts(sortedRatings);
    }
  };

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-40 mt-1">
        <Listbox.Button className="w-36 flex justify-between items-center">
          {selected.name} <FontAwesomeIcon icon={faFilter} />
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
