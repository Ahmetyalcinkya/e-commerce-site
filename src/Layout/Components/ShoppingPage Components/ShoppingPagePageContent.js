import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../../redux/features/thunk/fetchProducts";
import ShoppingInfo from "../../Compounds/GlobalCompounds/ShoppingInfo";
import ShoppingList from "../../Compounds/GlobalCompounds/ShoppingList";
import ListCardCompound from "../../Compounds/ProductListPageCompounds/ListCardCompound";

const ShoppingPagePageContent = () => {
  const products = useSelector((state) => state.product.productList);
  const cart = useSelector((state) => state.shopping.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    products?.length === 0 && dispatch(fetchProducts());
  }, [products]);
  return (
    <div className="w-full iphone:w-[65.625rem] m-auto">
      {cart.length == 0 ? (
        <div className="flex flex-col justify-around gap-y-12 pt-8 px-2 iphone:px-0">
          <div className="flex items-center justify-around iphone:justify-between w-full border-2 gap-x-1 iphone:gap-x-0 py-3 px-4 iphone:px-8 rounded-xl">
            <div className="flex justify-center items-center gap-x-4">
              <div className="bg-primary p-4 rounded-full flex items-center justify-center text-white">
                <FontAwesomeIcon icon={faCartShopping} size="2xl" />
              </div>
              <p className="font-bold">Sepetinizde ürün bulunmamaktadır.</p>
            </div>
            <Link
              to="/shopping"
              className="bg-primary py-3 px-6 rounded-lg text-white"
            >
              Alışverişe Başla
            </Link>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-left">ÜRÜNLERİMİZE GÖZ ATIN</p>
            <hr />
            <div className="flex flex-col iphone:flex-row flex-wrap w-full justify-around items-center">
              {products?.slice(0, 4).map((product, index) => (
                <ListCardCompound key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col iphone:flex-row gap-x-8">
          <div className="flex flex-col gap-y-4 text-left flex-1 px-3 iphone:px-0">
            <p className="text-xl">Sepetim ( {cart?.length} Ürün )</p>
            <hr />
            {cart?.map((product, index) => (
              <ShoppingList product={product} key={index} />
            ))}
          </div>
          <ShoppingInfo />
        </div>
      )}
    </div>
  );
};

export default ShoppingPagePageContent;
