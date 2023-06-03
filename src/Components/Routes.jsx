import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="*" element={<div>No match</div>} />
    </Routes>
  );
};

export default WebRoutes;
