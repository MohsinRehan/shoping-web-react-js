import React, { Children } from "react";
import TopHeader from "./component/header";
import LeftNavbar from "./component/leftsidenav";

const Adminlayout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <div className="flex">
       <div>
       <LeftNavbar />
       </div>
       <div className="w-[100%]">
       {children}
       </div>
      </div>
    </>
  );
};

export default Adminlayout;
