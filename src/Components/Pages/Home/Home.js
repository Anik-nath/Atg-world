import React from "react";
import Banner from "../../Shared/Banner/Banner";
import MainContent from "../../Shared/MainContent/MainContent";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";

const Home = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <MainContent></MainContent>
    </div>
  );
};

export default Home;
