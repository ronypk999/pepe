import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../page/section/Header";
import Footer from "../page/section/Footer";
import AOS from "aos";
const Layout: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200, // Animation duration (ms)
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
