import React from "react";
import AboutHeader from "./PageContentComponents/AboutHeader";
import Content1 from "./PageContentComponents/Content1";
import Stats from "./PageContentComponents/Stats";
import Video from "./PageContentComponents/Video";
import TeamMembers from "./PageContentComponents/TeamMembers";
import Companies from "./PageContentComponents/Companies";
import References from "./PageContentComponents/References";

const AboutPagePageContent = () => {
  return (
    <div className="w-full column-centered">
      <AboutHeader />
      <Content1 />
      <Stats />
      <Video />
      <TeamMembers />
      <Companies />
      <References />
    </div>
  );
};

export default AboutPagePageContent;
