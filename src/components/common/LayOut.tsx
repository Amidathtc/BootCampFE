import React from "react";
import Header from "../static/Header";
import { Outlet } from "react-router-dom";
import Footer from "../static/Footer";

const LayOut = () => {
  return (
    <div>
    <Header />
     <Outlet />
     <Footer />
    </div>
  );
};

export default LayOut;
