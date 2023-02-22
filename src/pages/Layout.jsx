import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
