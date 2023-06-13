import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Portfolio from "../Pages/Portfolio";

const WebRoutes = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [location]);

  if (loading) {
    return (
      <div className="h-screen w-full flex gap-x-3 justify-center items-center">
        <div className="font-thin text-4xl"> Yaami</div>
        <div class=" top-0 right-0 z-50 flex justify-center items-center">
          <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
        </div>
        <div className="font-bold text-4xl">Designs</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<div>No match</div>} />
    </Routes>
  );
};

export default WebRoutes;
