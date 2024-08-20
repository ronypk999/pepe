import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../page/section/Header";
import Footer from "../page/section/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
