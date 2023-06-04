import React from "react";

// ** Component import
import Hero from "../Components/Hero";
import About from "../Components/About";
import Service from "../Components/Service";
import Stats from "../Components/Stats";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Stats />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
