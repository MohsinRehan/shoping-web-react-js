import React, { Children } from "react";
import TopHeader from "./component/header";
import LeftNavbar from "./component/leftsidenav";

const Adminlayout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <div className="flex">
        <LeftNavbar />
        {children}
      </div>
    </>
  );
};

export default Adminlayout;
