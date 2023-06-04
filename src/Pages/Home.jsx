import React from "react";

// ** Component import
import Hero from "../Components/Hero";
import About from "../Components/About";
import Service from "../Components/Service";
import Stats from "../Components/Stats";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Stats />
      <About />
    </div>
  );
};

export default Home;
