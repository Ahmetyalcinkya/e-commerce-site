import React from "react";
import { CarouselWithContent } from "../../Compounds/HomePageCompounds/SliderCarousel";
import ShopCards from "./PageContentComponents/ShopCards";
import BrandsCompound from "../../Compounds/GlobalCompounds/BrandsCompound";
import ProductCards1 from "./PageContentComponents/ProductCards1";
import MostPopularProducts1 from "./PageContentComponents/MostPopularProducts1";
import ProductCards2 from "./PageContentComponents/ProductCards2";
import MostPopularProducts2 from "./PageContentComponents/MostPopularProducts2";
import BestSellerProducts from "./PageContentComponents/BestSellerProducts";
import FeaturedPosts from "./PageContentComponents/FeaturedPosts";

const PageContent = () => {
  return (
    <div>
      <CarouselWithContent />
      <ShopCards />
      <ProductCards1 />
      <MostPopularProducts1 />
      <ProductCards2 />
      <MostPopularProducts2 />
      <BestSellerProducts />
      <BrandsCompound />
      <FeaturedPosts />
    </div>
  );
};

export default PageContent;
