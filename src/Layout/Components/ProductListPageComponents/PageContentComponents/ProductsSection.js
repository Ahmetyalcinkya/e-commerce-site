import { Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import useQueryParams from "../../../../hooks/useQueryParams";
import { fetchMoreProducts } from "../../../../redux/features/thunk/fetchMoreProduct";
import ListCardCompound from "../../../Compounds/ProductListPageCompounds/ListCardCompound";
import { fetchProducts } from "../../../../redux/features/thunk/fetchProducts";
import ListCardListView from "../../../Compounds/ProductListPageCompounds/ListCardListView";

const ProductsSection = ({ view }) => {
  const { totalProductCount } = useSelector((state) => state.product);
  const products = useSelector((state) => state.product.productList);

  const dispatch = useDispatch();

  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [queryParams] = useQueryParams();

  const scrollParams = {
    limit: 28,
    offset: offset,
  };

  const fetchNextScroll = () => {
    dispatch(
      fetchMoreProducts({
        ...queryParams,
        scrollParams,
      })
    );
    setOffset(offset + 28);
  };

  // useEffect(() => {
  //   dispatch(
  //     fetchProducts({ ...queryParams, limit: scrollParams?.limit, offset: 0 })
  //   );
  //   setHasMore(true);
  //   setOffset(28);
  // }, [queryParams]);

  useEffect(() => {
    if (totalProductCount && products?.length === totalProductCount) {
      setHasMore(false);
    }
  }, [products]);

  const countOfProducts = products?.length;

  return (
    <section className="flex flex-col items-center w-full p-8">
      {/* product düzenlendiğinde h-[110.25rem] */}
      <InfiniteScroll
        dataLength={countOfProducts || 0}
        next={fetchNextScroll}
        loader={<Spinner />}
        hasMore={hasMore}
        endMessage={<p>Hepsini gördün</p>}
        className="flex flex-wrap iphone:w-[70.25rem] justify-around items-center"
      >
        {view == true
          ? products?.map((product, index) => (
              <ListCardCompound key={index} product={product} />
            ))
          : products?.map((product, index) => (
              <ListCardListView key={index} product={product} />
            ))}
      </InfiniteScroll>
    </section>
  );
};

export default ProductsSection;
