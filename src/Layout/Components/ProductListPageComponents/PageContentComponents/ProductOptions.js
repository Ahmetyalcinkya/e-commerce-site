import React, { useEffect, useState } from "react";
import { Icon } from "../../../../Icons/icons";
import FilterDropdown from "../../../Compounds/ProductListPageCompounds/FilterDropdown";
import ProductSearch from "../../../Compounds/ProductListPageCompounds/ProductSearch";
import useQueryParams from "../../../../hooks/useQueryParams";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../redux/features/thunk/fetchProducts";

const filteredParamsInitial = { filter: "", sort: "" };

const ProductOptions = () => {
  const { category } = useParams();
  const [queryParams, setQueryParams] = useQueryParams();
  const dispatch = useDispatch();

  const [filteredParams, setFilteredParams] = useState(filteredParamsInitial);

  const changeHandler = (e) => {
    setFilteredParams({ ...filteredParams, filter: e.target.value });
  };

  console.log(filteredParams);

  const filterHandler = (value) => {
    if (value.name === "Best to Worst") {
      setFilteredParams({ ...filteredParams, sort: value.sort });
    } else if (value.name === "Worst to Best") {
      setFilteredParams({ ...filteredParams, sort: value.sort });
    } else if (value.name === "Highest Price") {
      setFilteredParams({ ...filteredParams, sort: value.sort });
    } else if (value.name === "Lowest Price") {
      setFilteredParams({ ...filteredParams, sort: value.sort });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setQueryParams(filteredParams);
    console.log(queryParams);
  };

  useEffect(() => {
    dispatch(fetchProducts({ ...queryParams, category }));
  }, [queryParams]);

  return (
    <div className="w-full h-56 iphone:h-24 row-centered">
      <div className="iphone:w-[65.625rem] flex-col iphone:flex-row justify-around h-full flex items-center iphone:justify-between">
        <h6 className="font-bold text-sm text-[#737373]">
          Showing all 12 results
        </h6>
        <div className="flex items-center gap-x-4">
          <h6 className="font-bold text-sm text-secondary">Views:</h6>
          <div className="flex gap-x-4">
            <button className="w-12 h-12 row-centered border">
              <Icon name="list1" />
            </button>
            <button className="w-12 h-12 row-centered border">
              <Icon name="list2" />
            </button>
          </div>
        </div>
        <form onSubmit={submitHandler} className="flex gap-x-4 items-center">
          <ProductSearch changeHandler={changeHandler} />
          <FilterDropdown filterHandler={filterHandler} />
          <button
            type="submit"
            className="w-24 h-[3.125rem] text-white bg-primary rounded"
          >
            Filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductOptions;
