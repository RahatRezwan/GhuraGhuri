import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Header/Navbar/Navbar";

const Main = () => {
   return (
      <div className="relative">
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Main;
