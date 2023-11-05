import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import CategoryCardCompound from "../../../Compounds/ProductListPageCompounds/CategoryCardCompound";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategory } from "../../../../redux/features/thunk/fetchCategory";

const CategoryItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const categories = useSelector((state) => state.global.categories);

  const rating = [...categories];

  const ratings = rating.sort((a, b) => {
    return b.rating - a.rating;
  });

  return (
    <section className="flex flex-col h-[120rem] iphone:h-[23rem] justify-around bg-secondary w-full">
      <div className="h-[12rem] iphone:h-24 row-centered">
        <div className="w-full h-48 flex-col justify-around iphone:flex-row flex iphone:w-[65.625rem] iphone:h-[2.75rem] iphone:justify-between items-center">
          <h3 className="text-bold text-2xl text-quaternary">Shop</h3>
          <div className="flex items-center gap-x-4">
            <Link to="/" className="text-quaternary">
              Home
            </Link>
            <FontAwesomeIcon icon={faChevronRight} />
            <Link to="/shopping" className="text-fifth">
              Shop
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex-col iphone:flex-row iphone:w-[68rem] iphone:h-72 flex mx-auto justify-center">
        <div className="flex flex-col justify-around iphone:justify-center items-center iphone:flex-row gap-x-4 gap-y-4 iphone:gap-y-0">
          {ratings.slice(0, 5).map((category) => (
            <CategoryCardCompound key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryItems;
