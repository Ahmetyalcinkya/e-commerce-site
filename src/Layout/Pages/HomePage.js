import React from "react";
import Header from "../Components/HomePageComponents/Header";
import PageContent from "../Components/HomePageComponents/PageContent";
import Footer from "../Components/HomePageComponents/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
};

export default HomePage;
