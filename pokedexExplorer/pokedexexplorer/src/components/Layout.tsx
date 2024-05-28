import React from 'react';
import NavBar from "./NavBar";
import {Outlet} from "react-router";

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
